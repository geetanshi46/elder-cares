import { createFileRoute } from "@tanstack/react-router";
import Razorpay from "razorpay";
import crypto from "node:crypto";

export const Route = createFileRoute(
  "/api/verify-specific-cause-payment",
)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            donation,
          } = body;

          if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature
          ) {
            return Response.json(
              {
                success: false,
                error: "Missing Razorpay payment details.",
              },
              { status: 400 },
            );
          }

          const keyId = process.env.RAZORPAY_KEY_ID;
          const keySecret = process.env.RAZORPAY_KEY_SECRET;

          if (!keyId || !keySecret) {
            return Response.json(
              {
                success: false,
                error: "Razorpay configuration is missing.",
              },
              { status: 500 },
            );
          }

          const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
          });

          // Fetch the Razorpay order from the server
          const order = await razorpay.orders.fetch(
            razorpay_order_id,
          );

          // Verify amount
          const expectedAmount = Math.round(
            Number(donation?.amount) * 100,
          );

          if (
            !expectedAmount ||
            order.amount !== expectedAmount
          ) {
            return Response.json(
              {
                success: false,
                error:
                  "Payment amount does not match donation amount.",
              },
              { status: 400 },
            );
          }

          // Verify Razorpay signature
          const generatedSignature = crypto
            .createHmac("sha256", keySecret)
            .update(
              `${razorpay_order_id}|${razorpay_payment_id}`,
            )
            .digest("hex");

          if (
            generatedSignature !== razorpay_signature
          ) {
            return Response.json(
              {
                success: false,
                error:
                  "Payment signature verification failed.",
              },
              { status: 400 },
            );
          }

          // Specific Cause Google Sheet
          const sheetUrl =
            process.env.SPECIFIC_CAUSE_GOOGLE_SHEET_WEB_APP_URL;

          if (!sheetUrl) {
            return Response.json(
              {
                success: false,
                error:
                  "Specific Cause Google Sheet API URL is missing.",
              },
              { status: 500 },
            );
          }

          const donationId =
            donation?.donationId ||
            `NMT-SC-${Date.now()}`;

          const sheetResponse = await fetch(sheetUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              donationId,

              cause: donation?.cause || "",

              amount: donation?.amount || "",

              donorName: donation?.donorName || "",

              email: donation?.email || "",

              mobile: donation?.mobile || "",

              pan: donation?.pan || "",

              address: donation?.address || "",

              razorpayOrderId:
                razorpay_order_id,

              razorpayPaymentId:
                razorpay_payment_id,

              paymentStatus: "SUCCESS",
            }),
          });

          const sheetData =
            await sheetResponse.json();

          if (
            !sheetResponse.ok ||
            !sheetData.success
          ) {
            console.error(
              "Specific Cause Google Sheet save failed:",
              sheetData,
            );

            return Response.json(
              {
                success: false,
                error:
                  "Payment verified, but donation could not be saved.",
                paymentVerified: true,
                paymentId:
                  razorpay_payment_id,
              },
              { status: 500 },
            );
          }

          return Response.json({
            success: true,
            donationId,
            paymentId:
              razorpay_payment_id,
            orderId:
              razorpay_order_id,
            message:
              "Specific Cause payment verified and donation saved successfully.",
          });
        } catch (error) {
          console.error(
            "Specific Cause payment verification error:",
            error,
          );

          return Response.json(
            {
              success: false,
              error:
                "Unable to verify payment.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});