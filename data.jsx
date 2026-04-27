/* =========================================================
   Data — Gorilla Construction · structural keys (translated text lives in i18n.jsx)
   ========================================================= */

const SERVICE_KEYS = [
  { n: "01", titleKey: "s1_t", descKey: "s1_d", icon: "residential",    statKey: "s1_stat", tagKeys: ["s1_tag1", "s1_tag2", "s1_tag3"] },
  { n: "02", titleKey: "s2_t", descKey: "s2_d", icon: "commercial",     statKey: "s2_stat", tagKeys: ["s2_tag1", "s2_tag2", "s2_tag3"] },
  { n: "03", titleKey: "s3_t", descKey: "s3_d", icon: "industrial",     statKey: "s3_stat", tagKeys: ["s3_tag1", "s3_tag2", "s3_tag3"] },
  { n: "04", titleKey: "s4_t", descKey: "s4_d", icon: "renovation",     statKey: "s4_stat", tagKeys: ["s4_tag1", "s4_tag2", "s4_tag3"] },
  { n: "05", titleKey: "s5_t", descKey: "s5_d", icon: "infrastructure", statKey: "s5_stat", tagKeys: ["s5_tag1", "s5_tag2", "s5_tag3"] },
  { n: "06", titleKey: "s6_t", descKey: "s6_d", icon: "management",     statKey: "s6_stat", tagKeys: ["s6_tag1", "s6_tag2", "s6_tag3"] },
];

const PROJECT_KEYS = [
  { id: 1, titleKey: "p1_t", summaryKey: "p1_s", typeKey: "f_res", locKey: "loc_baku_yasamal", year: "2024", size: "lg",   tone: "warm", typeName: "Residential" },
  { id: 2, titleKey: "p2_t", summaryKey: "p2_s", typeKey: "f_ind", locKey: "loc_alat",         year: "2025", size: "md",   tone: "cool", typeName: "Industrial" },
  { id: 3, titleKey: "p3_t", summaryKey: "p3_s", typeKey: "f_com", locKey: "loc_ganja",        year: "2023", size: "sm",   tone: "sand", typeName: "Commercial" },
  { id: 4, titleKey: "p4_t", summaryKey: "p4_s", typeKey: "f_ren", locKey: "loc_icheri",       year: "2024", size: "sm",   tone: "warm", typeName: "Renovation" },
  { id: 5, titleKey: "p5_t", summaryKey: "p5_s", typeKey: "f_inf", locKey: "loc_absheron",     year: "2025", size: "wide", tone: "cool", typeName: "Infrastructure" },
  { id: 6, titleKey: "p6_t", summaryKey: "p6_s", typeKey: "f_com", locKey: "loc_zaqatala",     year: "2024", size: "md",   tone: "sand", typeName: "Commercial" },
  { id: 7, titleKey: "p7_t", summaryKey: "p7_s", typeKey: "f_ind", locKey: "loc_sumqayit",     year: "2023", size: "lg",   tone: "cool", typeName: "Industrial" },
];

// Filter chips: ID maps to typeName; label rendered via translation key
const FILTER_KEYS = [
  { id: "All",            labelKey: "f_all" },
  { id: "Residential",    labelKey: "f_res" },
  { id: "Commercial",     labelKey: "f_com" },
  { id: "Industrial",     labelKey: "f_ind" },
  { id: "Renovation",     labelKey: "f_ren" },
  { id: "Infrastructure", labelKey: "f_inf" },
];

const STAT_KEYS = [
  { num: "27",    unit: "yrs", labelKey: "stat_years",    detailKey: "stat_years_d" },
  { num: "340",   unit: "+",   labelKey: "stat_projects", detailKey: "stat_projects_d" },
  { num: "1,200", unit: "",    labelKey: "stat_team",     detailKey: "stat_team_d" },
  { num: "11",    unit: "",    labelKey: "stat_regions",  detailKey: "stat_regions_d" },
  { num: "0.42",  unit: "",    labelKey: "stat_safety",   detailKey: "stat_safety_d" },
];

const PILLAR_KEYS = [
  { n: "01", titleKey: "pillar_1_t", bodyKey: "pillar_1_b" },
  { n: "02", titleKey: "pillar_2_t", bodyKey: "pillar_2_b" },
  { n: "03", titleKey: "pillar_3_t", bodyKey: "pillar_3_b" },
  { n: "04", titleKey: "pillar_4_t", bodyKey: "pillar_4_b" },
];

const WHY_KEYS = [
  { n: "01", titleKey: "w1_t", bodyKey: "w1_b" },
  { n: "02", titleKey: "w2_t", bodyKey: "w2_b" },
  { n: "03", titleKey: "w3_t", bodyKey: "w3_b" },
  { n: "04", titleKey: "w4_t", bodyKey: "w4_b" },
  { n: "05", titleKey: "w5_t", bodyKey: "w5_b" },
  { n: "06", titleKey: "w6_t", bodyKey: "w6_b" },
];

const PROCESS_KEYS = [
  { n: "01", titleKey: "pr1_t", descKey: "pr1_d", durationKey: "pr1_dur", icon: "consultation",  deliverableKeys: ["pr1_dl1", "pr1_dl2", "pr1_dl3"] },
  { n: "02", titleKey: "pr2_t", descKey: "pr2_d", durationKey: "pr2_dur", icon: "planning",      deliverableKeys: ["pr2_dl1", "pr2_dl2", "pr2_dl3"] },
  { n: "03", titleKey: "pr3_t", descKey: "pr3_d", durationKey: "pr3_dur", icon: "design",        deliverableKeys: ["pr3_dl1", "pr3_dl2", "pr3_dl3"] },
  { n: "04", titleKey: "pr4_t", descKey: "pr4_d", durationKey: "pr4_dur", icon: "construction",  deliverableKeys: ["pr4_dl1", "pr4_dl2", "pr4_dl3"] },
  { n: "05", titleKey: "pr5_t", descKey: "pr5_d", durationKey: "pr5_dur", icon: "handover",      deliverableKeys: ["pr5_dl1", "pr5_dl2", "pr5_dl3"] },
];

const TESTIMONIAL_KEYS = [
  { quoteKey: "t1_q", nameKey: "t1_n", roleKey: "t1_r" },
  { quoteKey: "t2_q", nameKey: "t2_n", roleKey: "t2_r" },
  { quoteKey: "t3_q", nameKey: "t3_n", roleKey: "t3_r" },
];

const CONTACT_KEYS = [
  { labelKey: "cm_phone",  value: "+994 12 404 18 00",        detailKey: "cm_phone_d", icon: "phone" },
  { labelKey: "cm_wa",     value: "+994 50 218 18 00",        detailKey: "cm_wa_d",    icon: "whatsapp" },
  { labelKey: "cm_email",  value: "build@gorilla.az",         detailKey: "cm_email_d", icon: "mail" },
  { labelKey: "cm_office", valueKey: "cm_office_v",           detailKey: "cm_office_d",icon: "pin" },
];

const NAV_LINK_KEYS = [
  { labelKey: "nav_services", href: "#services" },
  { labelKey: "nav_projects", href: "#projects" },
  { labelKey: "nav_about",    href: "#about" },
  { labelKey: "nav_process",  href: "#process" },
  { labelKey: "nav_contact",  href: "#contact" },
];

const PARTNERS = ["SOCAR","Pasha Holding","Azərbaycan Yolları","Caspian Holdings","Azərenerji","Khazar Logistics"];

Object.assign(window, {
  SERVICE_KEYS, PROJECT_KEYS, FILTER_KEYS, STAT_KEYS, PILLAR_KEYS,
  WHY_KEYS, PROCESS_KEYS, TESTIMONIAL_KEYS, CONTACT_KEYS, NAV_LINK_KEYS,
  PARTNERS,
});
