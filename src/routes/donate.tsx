/* eslint-disable prettier/prettier */

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { CheckCircle2 } from "lucide-react";


const categories = [
  "Specific Cause",
  "Mobile Active Ageing",
  "Training",
  "Nutritions",
  "Physiotherapy",
  "Dementia Care",
  "Elder Care",
  "Smriti Gram",
  "Healthcare",
  "Research & Innovation",
  "Community Care",
  "General",
];

const donationAmounts = [
  "51",
  "101",
  "501",
  "1001",
  "2500",
  "3000",
  "5000",
  "7000",
  "10000",
];

const organizationTypes = [
  "Company",
  "Trust",
  "NGO",
  "Foundation",
  "Agency",
  "Institute",
  "Other",
];

const associationYears = [
  "Less than 1 year",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "More than 5 years",
];

const cities = [
  "Bengaluru",
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Other",
];

type PrimaryDetails = {
  amount: string;
  name: string;
  authorizedPerson: string;
  designation: string;
  email: string;
  mobile: string;
};

type IdentityDetails = {
  associationYears: string;
  pincode: string;
  pan: string;
  idProofNumber: string;
  city: string;
  registrationNo: string;
  state: string;
  website: string;
  address: string;
  comment: string;
};

export const Route = createFileRoute("/donate")({
  component: Donation,
});

function Donation() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] =
    useState("Dementia Care");
  const [donorType, setDonorType] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [nationality, setNationality] = useState("indian");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
const [paymentId, setPaymentId] = useState("");

  const [primary, setPrimary] = useState<PrimaryDetails>({
    amount: "",
    name: "",
    authorizedPerson: "",
    designation: "",
    email: "",
    mobile: "",
  });

 const [identity, setIdentity] = useState<IdentityDetails>({
  associationYears: "",
  pincode: "",
  pan: "",
  idProofNumber: "",
  city: "",
  registrationNo: "",
  state: "",
  website: "",
  address: "",
  comment: "",
});

  const updatePrimary = (
    field: keyof PrimaryDetails,
    value: string,
  ) => {
    setPrimary((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateIdentity = (
    field: keyof IdentityDetails,
    value: string,
  ) => {
    setIdentity((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const selectAmount = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    updatePrimary("amount", amount);
  };

  const selectCustomAmount = () => {
    setSelectedAmount("custom");
    updatePrimary("amount", customAmount);
  };

  const handleCustomAmount = (value: string) => {
    setSelectedAmount("custom");
    setCustomAmount(value);
    updatePrimary("amount", value);
  };

  const displayAmount = () => {
    const amount =
      selectedAmount === "custom"
        ? customAmount
        : selectedAmount;

    if (!amount) return "";

    const numericAmount = Number(amount);

    return Number.isFinite(numericAmount)
      ? `₹ ${numericAmount.toLocaleString("en-IN")}`
      : "";
  };

 const validateAndNext = () => {
  if (step === 1) {
    const required = [
  primary.amount,
  primary.name,
  primary.authorizedPerson,
  primary.designation,
  primary.email,
  primary.mobile,
  donorType,
];

    if (required.some((value) => !value.trim())) {
      alert(
        "Please fill all the required details before proceeding.",
      );
      return;
    }
  }

  if (step === 2) {
    const required = [
  identity.pincode,
  identity.pan,
  identity.idProofNumber,
  identity.city,
  identity.state,
  identity.address,
];

    if (required.some((value) => !value.trim())) {
      alert(
        "Please fill all the required details before proceeding.",
      );
      return;
    }

    if (!termsAccepted) {
      alert(
        "Please agree to the Terms and Conditions before proceeding.",
      );
      return;
    }
  }

  if (step < 3) {
    setStep((current) => current + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

  const goBack = () => {
    if (step > 1) {
      setStep((current) => current - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
const loadRazorpay = () => {
  return new Promise<boolean>((resolve) => {
    const razorpayWindow = window as typeof window & {
      Razorpay?: any;
    };

    if (razorpayWindow.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};
const handlePayment = async () => {
  if (!termsAccepted) {
    alert(
      "Please agree to the Terms and Conditions before proceeding.",
    );
    return;
  }

  const amount = Number(primary.amount);

  if (!amount || amount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  try {
    // Load Razorpay Checkout
    const razorpayLoaded = await loadRazorpay();

    if (!razorpayLoaded) {
      alert("Unable to load Razorpay. Please try again.");
      return;
    }

    // Create Razorpay order on our server
    const orderResponse = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        category: selectedCategory,
        donorName: primary.name,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok || !orderData.success) {
      throw new Error(
        orderData.error || "Unable to create payment order.",
      );
    }

    const razorpayWindow = window as typeof window & {
      Razorpay?: any;
    };

    if (!razorpayWindow.Razorpay) {
      throw new Error("Razorpay checkout is not available.");
    }

    const options = {
      key: orderData.keyId,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Nightingales Medical Trust",
      description: `Donation - ${selectedCategory}`,
      order_id: orderData.orderId,

      prefill: {
        name: primary.name,
        email: primary.email,
        contact: primary.mobile,
      },

      notes: {
        category: selectedCategory,
        donorType,
      },

      theme: {
        color: "#ED6439",
      },

      handler: async (response: any) => {
        try {
          console.log("Razorpay payment response:", response);

          // Verify payment on our server
          const verificationResponse = await fetch(
            "/api/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id:
                  response.razorpay_order_id,
                razorpay_payment_id:
                  response.razorpay_payment_id,
                razorpay_signature:
                  response.razorpay_signature,

                donation: {
                  category: selectedCategory,
                  amount: primary.amount,
                  donorType,
                  donorName: primary.name,
                  authorizedPerson:
                    primary.authorizedPerson,
                  designation: primary.designation,
                  email: primary.email,
                  mobile: primary.mobile,
                  nationality,

                  association:
                    identity.associationYears,
                  pincode: identity.pincode,
                  pan: identity.pan,
                  idProofType: identity.idProofNumber
                    ? "Aadhaar Card"
                    : "",
                  idProofNumber:
                    identity.idProofNumber,
                  city: identity.city,
                  registrationNo:
                    identity.registrationNo,
                  state: identity.state,
                  website: identity.website,
                  address: identity.address,
                  comment: identity.comment,
                },
              }),
            },
          );

          const verificationData =
            await verificationResponse.json();

          if (
            !verificationResponse.ok ||
            !verificationData.success
          ) {
            throw new Error(
              verificationData.error ||
                "Payment verification failed.",
            );
          }

         setPaymentId(response.razorpay_payment_id);
setShowSuccess(true);
        } catch (error) {
          console.error(
            "Payment verification error:",
            error,
          );

          alert(
            error instanceof Error
              ? error.message
              : "Payment was received, but verification failed. Please contact support.",
          );
        }
      },

      modal: {
        ondismiss: () => {
          console.log("Razorpay checkout closed.");
        },
      },
    };

    const razorpay =
      new razorpayWindow.Razorpay(options);

    razorpay.open();
  } catch (error) {
    console.error("Payment error:", error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong while starting the payment.",
    );
  }
};

  return (
  <div className="min-h-dvh bg-[#FFF9F0]">
    <Navbar />

    {showSuccess && (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#17232B]/75 px-5 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1EB]">
            <CheckCircle2 className="h-12 w-12 text-[#ED6439]" />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#17232B]">
            Thank You for Your Donation!
          </h2>

          <p className="mt-3 text-base leading-7 text-[#526574]">
            Your donation has been successfully received.
            Thank you for supporting Nightingales Medical Trust.
          </p>

          <div className="mt-6 rounded-2xl bg-[#FFF9F0] p-4 text-left">
            <p className="text-xs font-bold uppercase tracking-wide text-[#526574]">
              Payment ID
            </p>

            <p className="mt-2 break-all text-sm font-bold text-[#17232B]">
              {paymentId}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSuccess(false)}
            className="mt-7 w-full rounded-xl bg-[#ED6439] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#D9532B]"
          >
            Done
          </button>
        </div>
      </div>
    )}

    <main id="main">
        <section className="border-b border-[#263746]/10 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <div className="max-w-4xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ED6439]">
                Support Nightingales Medical Trust
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#17232B] sm:text-4xl lg:text-5xl">
                Donate to Make a Difference
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#526574] sm:text-lg">
                Your contribution can help us provide dignified elder care,
                dementia support, healthcare, research and community services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="border-b border-[#263746]/15 pb-7">
              <h2 className="text-2xl font-semibold uppercase tracking-tight text-[#17232B] sm:text-3xl">
                Donation by Category
              </h2>

              <p className="mt-2 text-base text-[#17232B] sm:text-lg">
                Donate to support Nightingales Medical Trust and the causes
                that matter to you.
              </p>

              <div className="mt-6 border-y border-[#263746]/15 py-4">
  <div className="flex gap-2 overflow-x-auto pb-1">
    {categories.map((category) => {
  const isSpecificCause = category === "Specific Cause";

  return isSpecificCause ? (
    <Link
      key={category}
      to="/specific-cause"
      className="shrink-0 border border-[#263746] bg-[#ED6439] px-7 py-3 text-sm font-semibold text-white transition-all sm:text-base"
      style={{
        clipPath:
          "polygon(3% 18%, 10% 8%, 18% 15%, 27% 7%, 36% 14%, 46% 6%, 56% 14%, 66% 7%, 76% 15%, 87% 8%, 97% 18%, 94% 32%, 98% 48%, 94% 64%, 97% 82%, 87% 92%, 77% 85%, 67% 94%, 57% 86%, 47% 94%, 37% 86%, 27% 93%, 17% 85%, 8% 92%, 3% 80%, 6% 64%, 2% 48%, 6% 32%)",
      }}
    >
      {category}
    </Link>
  ) : (
    <button
      key={category}
      type="button"
      onClick={() => setSelectedCategory(category)}
      className={`shrink-0 rounded-md border px-5 py-2.5 text-sm font-semibold transition-all sm:text-base ${
        selectedCategory === category
          ? "border-[#ED6439] bg-[#ED6439] text-white"
          : "border-[#263746] text-[#263746] hover:border-[#ED6439] hover:bg-[#ED6439] hover:text-white"
      }`}
    >
      {category}
    </button>
  );
})}
  </div>
</div>

              <p className="mt-7 max-w-6xl text-[15px] leading-7 text-[#17232B] sm:text-base">
                Your generosity helps Nightingales Medical Trust continue its work in Age Care and Dementia Care.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              <div className="flex items-start justify-center">
                <Step
                  number="1"
                  label="Primary Details"
                  active={step >= 1}
                />
                <div
                  className={`mt-4 h-px flex-1 ${
                    step >= 2 ? "bg-[#ED6439]" : "bg-[#C8CDD0]"
                  }`}
                />
                <Step
                  number="2"
                  label="Identity / Address"
                  active={step >= 2}
                />
                <div
                  className={`mt-4 h-px flex-1 ${
                    step >= 3 ? "bg-[#ED6439]" : "bg-[#C8CDD0]"
                  }`}
                />
                <Step number="3" label="Payment" active={step >= 3} />
              </div>
            </div>

            {step === 1 && (
              <div className="mx-auto mt-12 max-w-5xl">
                <div className="mx-auto max-w-xl">
                  {/* <FormField label="I'm an:">
                    <Select
                      value={donorType}
                      onChange={setDonorType}
                    >
                      <option value="">
                        Organization/Agency/Company/Trust/Institute
                      </option>
                      {organizationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </FormField> */}
                </div>

                <DonationAmountSelector
                  selectedAmount={selectedAmount}
                  customAmount={customAmount}
                  onSelect={selectAmount}
                  onCustomSelect={selectCustomAmount}
                  onCustomChange={handleCustomAmount}
                />

                <Nationality
                  value={nationality}
                  onChange={setNationality}
                />

                <div className="mt-12">
                  <h3 className="text-center text-2xl font-bold text-[#263746]">
                    Primary Details
                  </h3>

                  <div className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
                    <FormField label="Currency" required>
                      <div className="flex h-14 items-center rounded-md bg-[#E9ECEF] px-4 text-[15px] text-[#17232B]">
                        ₹ Indian Rupees
                      </div>
                    </FormField>

                    <FormField label="Amount" required>
                      <Input
                        type="number"
                        placeholder="Enter Amount"
                        value={primary.amount}
                        onChange={(value) =>
                          updatePrimary("amount", value)
                        }
                      />
                    </FormField>

                    <FormField label="I'm An" required>
  <Select
    value={donorType}
    onChange={setDonorType}
  >
    <option value="">Select</option>
    <option value="Individual">Individual</option>
    <option value="Institute">Institute</option>
    <option value="Other">Other</option>
  </Select>
</FormField>

                    <FormField label="Name" required>
                      <Input
                        placeholder="Enter Name"
                        value={primary.name}
                        onChange={(value) =>
                          updatePrimary("name", value)
                        }
                      />
                    </FormField>

                    <FormField label="Authorized Person">
  <Input
    placeholder="Enter Authorized Person Name"
    value={primary.authorizedPerson}
    onChange={(value) =>
      updatePrimary("authorizedPerson", value)
    }
  />
</FormField>

                    <FormField label="Designation">
                      <Input
                        placeholder="Enter Authorized Person Designation"
                        value={primary.designation}
                        onChange={(value) =>
                          updatePrimary("designation", value)
                        }
                      />
                    </FormField>

                    <FormField label="Email ID" required>
                      <Input
                        type="email"
                        placeholder="Enter Email ID"
                        value={primary.email}
                        onChange={(value) =>
                          updatePrimary("email", value)
                        }
                      />
                    </FormField>

                    <FormField label="Mobile No." required>
                      <Input
                        type="tel"
                        placeholder="Enter Your Mobile Number"
                        value={primary.mobile}
                        onChange={(value) =>
                          updatePrimary("mobile", value)
                        }
                      />
                    </FormField>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#263746]/15 pt-4 text-sm text-[#E15925]">
                  Note: Overseas donation will be processed offline.
                </div>

                <div className="mt-8 flex justify-center">
                  <ActionButton onClick={validateAndNext}>
                    Next
                  </ActionButton>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mx-auto mt-12 max-w-5xl">
                <DonationAmountSelector
                  selectedAmount={selectedAmount}
                  customAmount={customAmount}
                  onSelect={selectAmount}
                  onCustomSelect={selectCustomAmount}
                  onCustomChange={handleCustomAmount}
                />

                <Nationality
                  value={nationality}
                  onChange={setNationality}
                />

                <div className="mt-12">
                  <h3 className="text-center text-2xl font-bold text-[#263746]">
                    Identity/Address
                  </h3>

                  <div className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
                    <FormField label="Association with NMT">
                      <Select
                        value={identity.associationYears}
                        onChange={(value) =>
                          updateIdentity("associationYears", value)
                        }
                      >
                        <option value="">Select no. of years</option>
                        {associationYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Select>
                    </FormField>

                    <FormField label="Pincode" required>
                      <Input
                        placeholder="Enter Pincode"
                        value={identity.pincode}
                        onChange={(value) =>
                          updateIdentity("pincode", value)
                        }
                      />
                    </FormField>

                <FormField label="ID Proof" required info>
  <Select
    value={identity.pan}
    onChange={(value) =>
      updateIdentity("pan", value)
    }
  >
    <option value="">Select ID Proof</option>
    <option value="Aadhaar">Aadhaar Card</option>
    <option value="PAN">PAN Card</option>
    <option value="Passport">Passport</option>
  </Select>
</FormField>

<FormField label="ID Proof Number" required info>
  <Input
    placeholder={
      identity.pan
        ? `Enter ${identity.pan} Number`
        : "Enter ID Proof Number"
    }
    value={identity.idProofNumber}
    onChange={(value) =>
      updateIdentity("idProofNumber", value)
    }
  />
</FormField>

                    <FormField label="City" required>
                      <Select
                        value={identity.city}
                        onChange={(value) =>
                          updateIdentity("city", value)
                        }
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </Select>
                    </FormField>

                    {/* <FormField label="Registration No." required>
                      <Input
                        placeholder="Enter CIN / LLP Number"
                        value={identity.registrationNo}
                        onChange={(value) =>
                          updateIdentity("registrationNo", value)
                        }
                      />
                    </FormField> */}

                    <FormField label="State" required>
                      <Input
                        placeholder="Enter State"
                        value={identity.state}
                        onChange={(value) =>
                          updateIdentity("state", value)
                        }
                      />
                    </FormField>

                    <FormField label="Website">
                      <Input
                        type="url"
                        placeholder="Enter Your Website URL"
                        value={identity.website}
                        onChange={(value) =>
                          updateIdentity("website", value)
                        }
                      />
                    </FormField>

                    <FormField label="Address" required>
                      <Input
                        placeholder="Enter Address"
                        value={identity.address}
                        onChange={(value) =>
                          updateIdentity("address", value)
                        }
                      />
                    </FormField>

                    <FormField label="Comment">
                      <textarea
                        value={identity.comment}
                        onChange={(event) =>
                          updateIdentity("comment", event.target.value)
                        }
                        placeholder="Happy To Hear..."
                        className="min-h-[110px] w-full resize-y rounded-md border border-[#AEB5BA] bg-white px-4 py-3 text-[15px] text-[#17232B] outline-none placeholder:text-[#17232B] focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
                      />
                    </FormField>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#263746]/15 pt-5">
                  <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#17232B] sm:text-base">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(event) =>
                        setTermsAccepted(event.target.checked)
                      }
                      className="h-5 w-5 accent-[#ED6439]"
                    />
                    <span>
                      I agree to{" "}
                      <button
                        type="button"
                        className="font-bold text-[#1264E8] hover:underline"
                        onClick={() =>
                          alert("Terms and Conditions will be provided here.")
                        }
                      >
                        Terms and Conditions
                      </button>
                      .
                    </span>
                  </label>
                </div>

                <div className="mt-4 text-sm text-[#E15925]">
                  Note: Overseas donation will be processed offline.
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <SecondaryButton onClick={goBack}>
                    Back
                  </SecondaryButton>
                  <ActionButton onClick={validateAndNext}>
                    Payment
                  </ActionButton>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mx-auto mt-12 max-w-2xl">
                <div className="rounded-2xl border border-[#263746]/10 bg-white p-6 shadow-sm sm:p-10">
                  <h3 className="text-center text-2xl font-bold text-[#263746]">
                    Payment
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-[#526574] sm:text-base">
                    Please review your donation details before proceeding to
                    the payment gateway.
                  </p>

                  <div className="mt-8 space-y-4 rounded-xl bg-[#FFF9F0] p-5">
                    <SummaryRow
                      label="Category"
                      value={selectedCategory}
                    />
                    <SummaryRow
                      label="Donation Amount"
                      value={`₹ ${Number(primary.amount || customAmount || 0).toLocaleString("en-IN")}`}
                    />
                    <SummaryRow
                      label="Donor Name"
                      value={primary.name || "—"}
                    />
                    <SummaryRow
                      label="Email"
                      value={primary.email || "—"}
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <SecondaryButton onClick={goBack}>
                      Back
                    </SecondaryButton>
                    <ActionButton onClick={handlePayment}>
                      Proceed to Pay
                    </ActionButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function Step({
  number,
  label,
  active,
}: {
  number: string;
  label: string;
  active: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div
        className={`grid h-9 w-9 place-items-center rounded-full border ${
          active
            ? "border-[#ED6439] bg-[#ED6439] text-white"
            : "border-[#263746] bg-white text-[#263746]"
        }`}
      >
        {number}
      </div>
      <span className="mt-2 text-center text-xs font-medium text-[#17232B] sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function FormField({
  label,
  required = false,
  info = false,
  children,
}: {
  label: string;
  required?: boolean;
  info?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[190px_minmax(0,1fr)] sm:items-center sm:gap-6">
      <label className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-[#17232B]">
        {label}
        {required && <span className="text-[#E15925]">*</span>}
        {info && (
          <span
            title="Additional information"
            className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#17232B] text-xs text-white"
          >
            i
          </span>
        )}
      </label>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-14 w-full rounded-md border border-[#AEB5BA] bg-white px-4 text-[15px] text-[#17232B] outline-none transition placeholder:text-[#17232B] focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    />
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-14 w-full rounded-md border border-[#AEB5BA] bg-white px-4 text-[15px] text-[#17232B] outline-none focus:border-[#ED6439] focus:ring-2 focus:ring-[#ED6439]/10"
    >
      {children}
    </select>
  );
}

function DonationAmountSelector({
  selectedAmount,
  customAmount,
  onSelect,
  onCustomSelect,
  onCustomChange,
}: {
  selectedAmount: string;
  customAmount: string;
  onSelect: (amount: string) => void;
  onCustomSelect: () => void;
  onCustomChange: (value: string) => void;
}) {
  return (
    <div className="mt-10">
      <h3 className="text-center text-base font-bold uppercase text-[#17232B]">
        I/We Wish to Donate
      </h3>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-5">
        {donationAmounts.map((amount) => (
          <label
            key={amount}
            className="flex cursor-pointer items-center gap-2 text-base font-semibold text-[#17232B]"
          >
            <input
              type="radio"
              name="donationAmount"
              checked={selectedAmount === amount}
              onChange={() => onSelect(amount)}
              className="h-5 w-5 accent-[#263746]"
            />
            ₹ {Number(amount).toLocaleString("en-IN")}
          </label>
        ))}

        <label className="flex cursor-pointer items-center gap-2 text-base font-semibold text-[#17232B]">
          <input
            type="radio"
            name="donationAmount"
            checked={selectedAmount === "custom"}
            onChange={onCustomSelect}
            className="h-5 w-5 accent-[#263746]"
          />
          Custom
        </label>
      </div>

      {selectedAmount === "custom" && (
        <div className="mx-auto mt-5 max-w-sm">
          <Input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={onCustomChange}
          />
        </div>
      )}
    </div>
  );
}

function Nationality({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
      <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#17232B] sm:text-base">
        <input
          type="radio"
          name="nationality"
          value="indian"
          checked={value === "indian"}
          onChange={() => onChange("indian")}
          className="h-5 w-5 accent-[#263746]"
        />
        I'm an Indian National
      </label>

      <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#17232B] sm:text-base">
        <input
          type="radio"
          name="nationality"
          value="non-indian"
          checked={value === "non-indian"}
          onChange={() => onChange("non-indian")}
          className="h-5 w-5 accent-[#263746]"
        />
        I'm not an Indian National
      </label>
    </div>
  );
}

function ActionButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[120px] rounded-md bg-[#ED6439] px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#D9532B]"
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-[120px] rounded-md border border-[#FFB23E] bg-white px-8 py-3.5 text-base font-bold text-[#17232B] transition hover:bg-[#FFF4DF]"
    >
      {children}
    </button>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4 border-b border-[#263746]/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-[#526574]">{label}</span>
      <span className="break-all text-right text-sm font-semibold text-[#17232B]">
        {value}
      </span>
    </div>
  );
}
