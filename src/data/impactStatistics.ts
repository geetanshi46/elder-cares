// Canonical impact statistics for use across the NMT website.
// Keep cumulative and reporting-year figures separate.
// Update these values only after approval from NMT.
// Cumulative figures are aligned with the currently published NMT website figures.
// Annual figures are the supplied FY 2025–26 reporting set.

export type ImpactStatistic = {
  value: string;
  label: string;
};

export const CUMULATIVE_IMPACT_PERIOD =
  "Cumulative impact (since 1998; latest published cumulative figures)";

export const ANNUAL_IMPACT_PERIOD = "Financial year 2025–26 (1 April 2025–31 March 2026)";

export const cumulativeImpactStats: ImpactStatistic[] = [
  { value: "5,047", label: "Persons with dementia helped" },
  { value: "3,42,338", label: "Elders in distress assisted" },
  { value: "5,217", label: "Senior citizens placed in jobs" },
  { value: "800+", label: "Older persons benefiting every day" },
];

export const annualImpactStats: ImpactStatistic[] = [
  { value: "38,633", label: "Elders served" },
  {
    value: "498",
    label: "Persons with dementia supported through residential and day-care services",
  },
  { value: "145+", label: "Destitute elders served" },
  {
    value: "161",
    label: "Marginalized elders supported through Hiriyarawadies",
  },
  { value: "13,159", label: "Actionable helpline calls handled" },
  { value: "241", label: "Seniors placed in employment" },
  {
    value: "654",
    label: "Elders reached through Mobile Active Ageing across 28 old-age homes",
  },
  { value: "2,510+", label: "People trained in care and lifesaving skills" },
  { value: "1,647", label: "Volunteers and interns engaged" },
  { value: "36", label: "Corporate organisations partnered with NMT" },
];

export const lifetimeImpactStats = [
  { id: "elders-impacted", icon: "users", number: "3.36 Lakh+", text: "Elders impacted", context: "Cumulative figure since 1998." },
  { id: "counselling-sessions", icon: "phone", number: "47,000+", text: "Counselling sessions to assist elders in distress", context: "Cumulative figure since 1998." },
  { id: "dementia-support", icon: "brain", number: "2,000+", text: "Elders with dementia served", context: "Cumulative figure since 1998." },
  { id: "marginalized-elders", icon: "handHeart", number: "6,000+", text: "Marginalized elders assisted", context: "Cumulative figure since 1998." },
  { id: "job-fairs", icon: "briefcase", number: "11", text: "Job fairs for elders", context: "Cumulative figure since 1998." },
  { id: "digital-literacy", icon: "monitor", number: "200+", text: "Computer and digital literacy programs", context: "Cumulative figure since 1998." },
  { id: "employment-opportunities", icon: "briefcase", number: "4,000+", text: "Employment opportunities created for elders", context: "Cumulative figure since 1998." },
  { id: "lifesaving-training", icon: "graduation", number: "80,000+", text: "People trained in lifesaving skills", context: "Cumulative figure since 1998." },
  { id: "caregivers-trained", icon: "heartHandshake", number: "5,000+", text: "Caregivers trained", context: "Cumulative figure since 1998." },
  { id: "volunteers-interns", icon: "users", number: "8,000+", text: "Volunteers and interns engaged", context: "Cumulative figure since 1998." },
  { id: "corporate-partners", icon: "heartHandshake", number: "60+", text: "Corporate organisations partnered", context: "Cumulative figure since 1998." },
] as const;
