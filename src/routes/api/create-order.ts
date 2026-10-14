import { createFileRoute } from "@tanstack/react-router";
import Razorpay from "razorpay";

export const Route = createFileRoute("/api/create-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const amount = Number(body.amount);
          const category = body.category || "General";
          const donorName = body.donorName || "";

          if (!amount || amount <= 0) {
            return Response.json(
              {
                success: false,
                error: "Invalid donation amount",
              },
              { status: 400 },
            );
          }

          const keyId = process.env.RAZORPAY_KEY_ID;
          const keySecret = process.env.RAZORPAY_KEY_SECRET;

          if (!keyId || !keySecret) {
            console.error("Razorpay environment variables are missing.");

            return Response.json(
              {
                success: false,
                error: "Razorpay configuration is missing on the server.",
              },
              { status: 500 },
            );
          }

          const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
          });

          const order = await razorpay.orders.create({
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt: `nmt_${Date.now()}`,
            notes: {
              category,
              donorName,
            },
          });

          return Response.json({
            success: true,
            keyId,
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
          });
        } catch (error) {
          console.error("Razorpay create order error:", error);

          return Response.json(
            {
              success: false,
              error: "Unable to create Razorpay order.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});