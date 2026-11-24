import { Patient } from '@/types';

/**
 * Extended Mock Patients Dataset (50 Clinically Validated Records)
 * Realistically modeled for single-doctor homoeopathic OPD practice
 * in Taxila / Wah / Rawalpindi region.
 */
export const EXTENDED_PATIENTS: Patient[] = [
  {
    "id": "p-6",
    "mrn": "NK-1511",
    "fullName": "Tariq Mehmood",
    "relationType": "s/o",
    "relativeName": "Abdul Majeed",
    "age": 42,
    "gender": "Male",
    "phone": "0301-7350753",
    "locality": "Wah Cantt",
    "totalVisits": 3,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-10",
        "name": "Right-Sided Migraine",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      },
      {
        "id": "cc-11",
        "name": "Photophobia & Nausea",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "pastVisits": [
      {
        "id": "v-200",
        "patientId": "p-6",
        "date": "21 Nov 2026",
        "tokenNo": 9,
        "reaction": "Decline",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-500",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-501",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 3. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-201",
        "patientId": "p-6",
        "date": "14 Nov 2026",
        "tokenNo": 38,
        "reaction": "No Change",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-502",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": true
          },
          {
            "id": "rx-503",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 1000,
        "feeStatus": "Paid"
      },
      {
        "id": "v-202",
        "patientId": "p-6",
        "date": "31 Oct 2026",
        "tokenNo": 49,
        "reaction": "First Visit",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-504",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": true
          },
          {
            "id": "rx-505",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ],
    "severityTrend": {
      "complaintName": "Right-Sided Migraine",
      "overallRelief": "Under evaluation",
      "history": [
        {
          "label": "31 Oct",
          "date": "31 Oct 2026",
          "score": 85
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 60
        },
        {
          "label": "Latest",
          "date": "21 Nov 2026",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "p-7",
    "mrn": "NK-1512",
    "fullName": "Muhammad Aslam",
    "relationType": "s/o",
    "relativeName": "Ghulam Rasool",
    "age": 48,
    "gender": "Male",
    "phone": "0321-7120868",
    "locality": "Hasan Abdal",
    "totalVisits": 2,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-12",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-13",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-203",
        "patientId": "p-7",
        "date": "20 Nov 2026",
        "tokenNo": 10,
        "reaction": "Decline",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-506",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-507",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 1000,
        "feeStatus": "Due"
      },
      {
        "id": "v-204",
        "patientId": "p-7",
        "date": "12 Nov 2026",
        "tokenNo": 21,
        "reaction": "First Visit",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-508",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": true
          },
          {
            "id": "rx-509",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-8",
    "mrn": "NK-1513",
    "fullName": "Rashida Begum",
    "relationType": "w/o",
    "relativeName": "Fazal Karim",
    "age": 72,
    "gender": "Female",
    "phone": "0312-5528972",
    "locality": "GT Road Taxila",
    "totalVisits": 1,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-14",
        "name": "Chronic Frontal Sinusitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "2 yrs"
      },
      {
        "id": "cc-15",
        "name": "Post-Nasal Drip",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-205",
        "patientId": "p-8",
        "date": "19 Nov 2026",
        "tokenNo": 5,
        "reaction": "Decline",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-510",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-511",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-9",
    "mrn": "NK-1514",
    "fullName": "Kaneez Fatima",
    "relationType": "w/o",
    "relativeName": "Jahangir Khan",
    "age": 58,
    "gender": "Female",
    "phone": "0312-5491946",
    "locality": "Wah Cantt",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-16",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-17",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-206",
        "patientId": "p-9",
        "date": "18 Nov 2026",
        "tokenNo": 51,
        "reaction": "Decline",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-512",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-513",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-10",
    "mrn": "NK-1515",
    "fullName": "Rabia Basri",
    "relationType": "d/o",
    "relativeName": "Mohammad Rizwan",
    "age": 21,
    "gender": "Female",
    "phone": "0302-5443951",
    "locality": "Hasan Abdal",
    "totalVisits": 2,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-18",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-19",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-207",
        "patientId": "p-10",
        "date": "17 Nov 2026",
        "tokenNo": 52,
        "reaction": "Decline",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-514",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-515",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 1000,
        "feeStatus": "Paid"
      },
      {
        "id": "v-208",
        "patientId": "p-10",
        "date": "03 Nov 2026",
        "tokenNo": 18,
        "reaction": "First Visit",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-516",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": true
          },
          {
            "id": "rx-517",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-11",
    "mrn": "NK-1516",
    "fullName": "Ibrahim Tariq",
    "relationType": "s/o",
    "relativeName": "Tariq Aziz",
    "age": 8,
    "gender": "Child",
    "phone": "0301-1790481",
    "locality": "Gulshan-e-Anwar",
    "totalVisits": 1,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-20",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-21",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-209",
        "patientId": "p-11",
        "date": "16 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-518",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-519",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-12",
    "mrn": "NK-1517",
    "fullName": "Ghulam Murtaza",
    "relationType": "s/o",
    "relativeName": "Karam Elahi",
    "age": 63,
    "gender": "Male",
    "phone": "0312-8852574",
    "locality": "Model Town Taxila",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-22",
        "name": "Right-Sided Migraine",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      },
      {
        "id": "cc-23",
        "name": "Photophobia & Nausea",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "pastVisits": [
      {
        "id": "v-210",
        "patientId": "p-12",
        "date": "15 Nov 2026",
        "tokenNo": 35,
        "reaction": "Improved",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-520",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-521",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-13",
    "mrn": "NK-1518",
    "fullName": "Rukhsana Bibi",
    "relationType": "w/o",
    "relativeName": "Arshad Ali",
    "age": 47,
    "gender": "Female",
    "phone": "0301-5924115",
    "locality": "HIT Colony",
    "totalVisits": 2,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-24",
        "name": "Chronic Gastritis & GERD",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "8 mos"
      },
      {
        "id": "cc-25",
        "name": "Flatulence & Bloating",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-211",
        "patientId": "p-13",
        "date": "21 Nov 2026",
        "tokenNo": 65,
        "reaction": "Decline",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-522",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": false
          },
          {
            "id": "rx-523",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-212",
        "patientId": "p-13",
        "date": "14 Nov 2026",
        "tokenNo": 65,
        "reaction": "First Visit",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-524",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": true
          },
          {
            "id": "rx-525",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-14",
    "mrn": "NK-1519",
    "fullName": "Imtiaz Ahmed",
    "relationType": "s/o",
    "relativeName": "Haji Noor Muhammad",
    "age": 51,
    "gender": "Male",
    "phone": "0302-7273233",
    "locality": "Railway Scheme Wah",
    "totalVisits": 2,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-26",
        "name": "Chronic Gastritis & GERD",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "8 mos"
      },
      {
        "id": "cc-27",
        "name": "Flatulence & Bloating",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-213",
        "patientId": "p-14",
        "date": "20 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-526",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": false
          },
          {
            "id": "rx-527",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-214",
        "patientId": "p-14",
        "date": "12 Nov 2026",
        "tokenNo": 40,
        "reaction": "First Visit",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-528",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": true
          },
          {
            "id": "rx-529",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-15",
    "mrn": "NK-1520",
    "fullName": "Asma Riaz",
    "relationType": "w/o",
    "relativeName": "Tanveer Hussain",
    "age": 33,
    "gender": "Female",
    "phone": "0300-5041154",
    "locality": "Nawababad",
    "totalVisits": 2,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-28",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-29",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-215",
        "patientId": "p-15",
        "date": "19 Nov 2026",
        "tokenNo": 17,
        "reaction": "Improved",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-530",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-531",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-216",
        "patientId": "p-15",
        "date": "05 Nov 2026",
        "tokenNo": 55,
        "reaction": "First Visit",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-532",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": true
          },
          {
            "id": "rx-533",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-16",
    "mrn": "NK-1521",
    "fullName": "Malik Farooq",
    "relationType": "s/o",
    "relativeName": "Malik Sher Khan",
    "age": 44,
    "gender": "Male",
    "phone": "0333-6229731",
    "locality": "HIT Colony",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-30",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-31",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-217",
        "patientId": "p-16",
        "date": "18 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-534",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-535",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-17",
    "mrn": "NK-1522",
    "fullName": "Nusrat Jahan",
    "relationType": "w/o",
    "relativeName": "Sajjad Haider",
    "age": 37,
    "gender": "Female",
    "phone": "0300-4860684",
    "locality": "Nawababad",
    "totalVisits": 1,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-32",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-33",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-218",
        "patientId": "p-17",
        "date": "17 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-536",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-537",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-18",
    "mrn": "NK-1523",
    "fullName": "Haleema Sadia",
    "relationType": "d/o",
    "relativeName": "Naveed Afzal",
    "age": 19,
    "gender": "Female",
    "phone": "0301-9626108",
    "locality": "Sarai Kala",
    "totalVisits": 2,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-34",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-35",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-219",
        "patientId": "p-18",
        "date": "16 Nov 2026",
        "tokenNo": 61,
        "reaction": "No Change",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-538",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-539",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 1000,
        "feeStatus": "Due"
      },
      {
        "id": "v-220",
        "patientId": "p-18",
        "date": "02 Nov 2026",
        "tokenNo": 25,
        "reaction": "First Visit",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-540",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": true
          },
          {
            "id": "rx-541",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-19",
    "mrn": "NK-1524",
    "fullName": "Samina Kausar",
    "relationType": "w/o",
    "relativeName": "Ghulam Murtaza",
    "age": 34,
    "gender": "Female",
    "phone": "0301-8231838",
    "locality": "B-17 Multi Gardens",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-36",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-37",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-221",
        "patientId": "p-19",
        "date": "15 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-542",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-543",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-20",
    "mrn": "NK-1525",
    "fullName": "Tanveer Hussain",
    "relationType": "s/o",
    "relativeName": "Mushtaq Hussain",
    "age": 46,
    "gender": "Male",
    "phone": "0312-6692553",
    "locality": "Railway Scheme Wah",
    "totalVisits": 1,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-38",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-39",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-222",
        "patientId": "p-20",
        "date": "21 Nov 2026",
        "tokenNo": 55,
        "reaction": "No Change",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-544",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-545",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-21",
    "mrn": "NK-1526",
    "fullName": "Khalid Mehmood",
    "relationType": "s/o",
    "relativeName": "Muhammad Yousaf",
    "age": 62,
    "gender": "Male",
    "phone": "0334-8761611",
    "locality": "Sarai Kala",
    "totalVisits": 2,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-40",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-41",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-223",
        "patientId": "p-21",
        "date": "20 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-546",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-547",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 300,
        "feeStatus": "Paid"
      },
      {
        "id": "v-224",
        "patientId": "p-21",
        "date": "12 Nov 2026",
        "tokenNo": 63,
        "reaction": "First Visit",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-548",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": true
          },
          {
            "id": "rx-549",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-22",
    "mrn": "NK-1527",
    "fullName": "Shazia Pervez",
    "relationType": "w/o",
    "relativeName": "Bashir Ahmed",
    "age": 41,
    "gender": "Female",
    "phone": "0333-7728339",
    "locality": "Taxila Cantt",
    "totalVisits": 1,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-42",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-43",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-225",
        "patientId": "p-22",
        "date": "19 Nov 2026",
        "tokenNo": 59,
        "reaction": "Improved",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-550",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-551",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-23",
    "mrn": "NK-1528",
    "fullName": "Abdul Rehman",
    "relationType": "s/o",
    "relativeName": "Muhammad Din",
    "age": 56,
    "gender": "Male",
    "phone": "0312-9164991",
    "locality": "Hasan Abdal",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-44",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-45",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-226",
        "patientId": "p-23",
        "date": "18 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-552",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-553",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-24",
    "mrn": "NK-1529",
    "fullName": "Naveed Afzal",
    "relationType": "s/o",
    "relativeName": "Muhammad Afzal",
    "age": 31,
    "gender": "Male",
    "phone": "0300-1841248",
    "locality": "Nawababad",
    "totalVisits": 2,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-46",
        "name": "Chronic Frontal Sinusitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "2 yrs"
      },
      {
        "id": "cc-47",
        "name": "Post-Nasal Drip",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-227",
        "patientId": "p-24",
        "date": "17 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-554",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-555",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 300,
        "feeStatus": "Due"
      },
      {
        "id": "v-228",
        "patientId": "p-24",
        "date": "03 Nov 2026",
        "tokenNo": 31,
        "reaction": "First Visit",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-556",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-557",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-25",
    "mrn": "NK-1530",
    "fullName": "Bushra Bibi",
    "relationType": "w/o",
    "relativeName": "Muhammad Aslam",
    "age": 38,
    "gender": "Female",
    "phone": "0301-5130808",
    "locality": "Nawababad",
    "totalVisits": 2,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-48",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-49",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-229",
        "patientId": "p-25",
        "date": "16 Nov 2026",
        "tokenNo": 41,
        "reaction": "Decline",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-558",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-559",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-230",
        "patientId": "p-25",
        "date": "02 Nov 2026",
        "tokenNo": 39,
        "reaction": "First Visit",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-560",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": true
          },
          {
            "id": "rx-561",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-26",
    "mrn": "NK-1531",
    "fullName": "Muhammad Rayyan",
    "relationType": "s/o",
    "relativeName": "Shahid Nadeem",
    "age": 6,
    "gender": "Child",
    "phone": "0345-2217071",
    "locality": "Taxila Cantt",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-50",
        "name": "Difficult Dentition Irritability",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "3 wks"
      },
      {
        "id": "cc-51",
        "name": "Night Grinding & Diarrhea",
        "severity": "Mild",
        "trend": "Stable",
        "duration": "2 wks"
      }
    ],
    "pastVisits": [
      {
        "id": "v-231",
        "patientId": "p-26",
        "date": "15 Nov 2026",
        "tokenNo": 65,
        "reaction": "Improved",
        "symptoms": "One cheek red and hot, other pale. Child only quiet when carried continuously.",
        "prescriptions": [
          {
            "id": "rx-562",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops in teaspoon water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-563",
            "remedy": "Calcarea Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "1 pinch twice daily",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-27",
    "mrn": "NK-1532",
    "fullName": "Nazia Bibi",
    "relationType": "w/o",
    "relativeName": "Liaqat Ali",
    "age": 43,
    "gender": "Female",
    "phone": "0302-6855396",
    "locality": "Wah Cantt",
    "totalVisits": 2,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-52",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-53",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-232",
        "patientId": "p-27",
        "date": "21 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-564",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-565",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-233",
        "patientId": "p-27",
        "date": "14 Nov 2026",
        "tokenNo": 18,
        "reaction": "First Visit",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-566",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": true
          },
          {
            "id": "rx-567",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-28",
    "mrn": "NK-1533",
    "fullName": "Bashir Ahmed",
    "relationType": "s/o",
    "relativeName": "Sultan Mehmood",
    "age": 71,
    "gender": "Male",
    "phone": "0301-2795765",
    "locality": "Museum Road Taxila",
    "totalVisits": 2,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-54",
        "name": "Chronic Gastritis & GERD",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "8 mos"
      },
      {
        "id": "cc-55",
        "name": "Flatulence & Bloating",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-234",
        "patientId": "p-28",
        "date": "20 Nov 2026",
        "tokenNo": 34,
        "reaction": "No Change",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-568",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": false
          },
          {
            "id": "rx-569",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 1000,
        "feeStatus": "Paid"
      },
      {
        "id": "v-235",
        "patientId": "p-28",
        "date": "12 Nov 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-570",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": true
          },
          {
            "id": "rx-571",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-29",
    "mrn": "NK-1534",
    "fullName": "Eshal Fatima",
    "relationType": "d/o",
    "relativeName": "Faisal Masood",
    "age": 9,
    "gender": "Child",
    "phone": "0312-5641923",
    "locality": "Taxila Cantt",
    "totalVisits": 2,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-56",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-57",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-236",
        "patientId": "p-29",
        "date": "19 Nov 2026",
        "tokenNo": 21,
        "reaction": "No Change",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-572",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-573",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 1000,
        "feeStatus": "Due"
      },
      {
        "id": "v-237",
        "patientId": "p-29",
        "date": "05 Nov 2026",
        "tokenNo": 2,
        "reaction": "First Visit",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-574",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": true
          },
          {
            "id": "rx-575",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-30",
    "mrn": "NK-1535",
    "fullName": "Zayan Ali",
    "relationType": "s/o",
    "relativeName": "Ali Shan",
    "age": 4,
    "gender": "Child",
    "phone": "0301-3500715",
    "locality": "Model Town Taxila",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-58",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-59",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-238",
        "patientId": "p-30",
        "date": "18 Nov 2026",
        "tokenNo": 40,
        "reaction": "No Change",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-576",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-577",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-31",
    "mrn": "NK-1536",
    "fullName": "Saeed-ur-Rehman",
    "relationType": "s/o",
    "relativeName": "Abdul Jabbar",
    "age": 66,
    "gender": "Male",
    "phone": "0300-7003042",
    "locality": "Sarai Kala",
    "totalVisits": 3,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-60",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-61",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-239",
        "patientId": "p-31",
        "date": "17 Nov 2026",
        "tokenNo": 53,
        "reaction": "Decline",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-578",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-579",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 3. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 800,
        "feeStatus": "Free"
      },
      {
        "id": "v-240",
        "patientId": "p-31",
        "date": "03 Nov 2026",
        "tokenNo": 23,
        "reaction": "No Change",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-580",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": true
          },
          {
            "id": "rx-581",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-241",
        "patientId": "p-31",
        "date": "20 Oct 2026",
        "tokenNo": 43,
        "reaction": "First Visit",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-582",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": true
          },
          {
            "id": "rx-583",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Bronchitis",
      "overallRelief": "Under evaluation",
      "history": [
        {
          "label": "20 Oct",
          "date": "20 Oct 2026",
          "score": 85
        },
        {
          "label": "03 Nov",
          "date": "03 Nov 2026",
          "score": 60
        },
        {
          "label": "Latest",
          "date": "17 Nov 2026",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "p-32",
    "mrn": "NK-1537",
    "fullName": "Zafar Iqbal",
    "relationType": "s/o",
    "relativeName": "Muhammad Yaqoob",
    "age": 59,
    "gender": "Male",
    "phone": "0333-5476257",
    "locality": "Hasan Abdal",
    "totalVisits": 2,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-62",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-63",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-242",
        "patientId": "p-32",
        "date": "16 Nov 2026",
        "tokenNo": 59,
        "reaction": "Improved",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-584",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-585",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-243",
        "patientId": "p-32",
        "date": "02 Nov 2026",
        "tokenNo": 30,
        "reaction": "First Visit",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-586",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": true
          },
          {
            "id": "rx-587",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-33",
    "mrn": "NK-1538",
    "fullName": "Kausar Parveen",
    "relationType": "w/o",
    "relativeName": "Nazir Hussain",
    "age": 50,
    "gender": "Female",
    "phone": "0300-4240180",
    "locality": "HIT Colony",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-64",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-65",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-244",
        "patientId": "p-33",
        "date": "15 Nov 2026",
        "tokenNo": 52,
        "reaction": "Improved",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-588",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-589",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-34",
    "mrn": "NK-1539",
    "fullName": "Bilqees Akhtar",
    "relationType": "w/o",
    "relativeName": "Muhammad Rafiq",
    "age": 64,
    "gender": "Female",
    "phone": "0300-2935113",
    "locality": "Faisal Hills",
    "totalVisits": 2,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-66",
        "name": "Chronic Gastritis & GERD",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "8 mos"
      },
      {
        "id": "cc-67",
        "name": "Flatulence & Bloating",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-245",
        "patientId": "p-34",
        "date": "21 Nov 2026",
        "tokenNo": 56,
        "reaction": "Decline",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-590",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": false
          },
          {
            "id": "rx-591",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 300,
        "feeStatus": "Paid"
      },
      {
        "id": "v-246",
        "patientId": "p-34",
        "date": "14 Nov 2026",
        "tokenNo": 56,
        "reaction": "First Visit",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-592",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": true
          },
          {
            "id": "rx-593",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-35",
    "mrn": "NK-1540",
    "fullName": "Hoorain Fatima",
    "relationType": "d/o",
    "relativeName": "Babar Azam",
    "age": 3,
    "gender": "Child",
    "phone": "0312-4188992",
    "locality": "Faisal Hills",
    "totalVisits": 3,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-68",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-69",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-247",
        "patientId": "p-35",
        "date": "20 Nov 2026",
        "tokenNo": 26,
        "reaction": "Improved",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-594",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-595",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 3. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 800,
        "feeStatus": "Free"
      },
      {
        "id": "v-248",
        "patientId": "p-35",
        "date": "12 Nov 2026",
        "tokenNo": 43,
        "reaction": "Improved",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-596",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": true
          },
          {
            "id": "rx-597",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-249",
        "patientId": "p-35",
        "date": "28 Oct 2026",
        "tokenNo": 39,
        "reaction": "First Visit",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-598",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": true
          },
          {
            "id": "rx-599",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Bronchitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "28 Oct",
          "date": "28 Oct 2026",
          "score": 85
        },
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 60
        },
        {
          "label": "Latest",
          "date": "20 Nov 2026",
          "score": 30
        }
      ]
    }
  },
  {
    "id": "p-36",
    "mrn": "NK-1541",
    "fullName": "Meerab Bilal",
    "relationType": "d/o",
    "relativeName": "Bilal Akbar",
    "age": 7,
    "gender": "Child",
    "phone": "0312-6472441",
    "locality": "HIT Colony",
    "totalVisits": 2,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-70",
        "name": "Chronic Frontal Sinusitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "2 yrs"
      },
      {
        "id": "cc-71",
        "name": "Post-Nasal Drip",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-250",
        "patientId": "p-36",
        "date": "19 Nov 2026",
        "tokenNo": 49,
        "reaction": "No Change",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-600",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-601",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-251",
        "patientId": "p-36",
        "date": "05 Nov 2026",
        "tokenNo": 52,
        "reaction": "First Visit",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-602",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-603",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-37",
    "mrn": "NK-1542",
    "fullName": "Kamran Haider",
    "relationType": "s/o",
    "relativeName": "Haider Ali",
    "age": 28,
    "gender": "Male",
    "phone": "0334-5813613",
    "locality": "Sarai Kala",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-72",
        "name": "Left Lumbar Sciatica",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-252",
        "patientId": "p-37",
        "date": "18 Nov 2026",
        "tokenNo": 28,
        "reaction": "Decline",
        "symptoms": "Cramping shooting pain down left sciatic nerve. Ameliorated by hard pressure and bending double.",
        "prescriptions": [
          {
            "id": "rx-604",
            "remedy": "Colocynthis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-605",
            "remedy": "Magnesia Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "4 tablets dissolved in hot water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-38",
    "mrn": "NK-1543",
    "fullName": "Arshad Ali",
    "relationType": "s/o",
    "relativeName": "Barkat Ali",
    "age": 39,
    "gender": "Male",
    "phone": "0302-2422633",
    "locality": "Faisal Hills",
    "totalVisits": 1,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-73",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-74",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-253",
        "patientId": "p-38",
        "date": "17 Nov 2026",
        "tokenNo": 26,
        "reaction": "No Change",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-606",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-607",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-39",
    "mrn": "NK-1544",
    "fullName": "Anaya Khan",
    "relationType": "d/o",
    "relativeName": "Irfan Ullah",
    "age": 5,
    "gender": "Child",
    "phone": "0300-1775337",
    "locality": "Sarai Kala",
    "totalVisits": 2,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-75",
        "name": "Difficult Dentition Irritability",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "3 wks"
      },
      {
        "id": "cc-76",
        "name": "Night Grinding & Diarrhea",
        "severity": "Mild",
        "trend": "Stable",
        "duration": "2 wks"
      }
    ],
    "pastVisits": [
      {
        "id": "v-254",
        "patientId": "p-39",
        "date": "16 Nov 2026",
        "tokenNo": 25,
        "reaction": "Improved",
        "symptoms": "One cheek red and hot, other pale. Child only quiet when carried continuously.",
        "prescriptions": [
          {
            "id": "rx-608",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops in teaspoon water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-609",
            "remedy": "Calcarea Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "1 pinch twice daily",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-255",
        "patientId": "p-39",
        "date": "02 Nov 2026",
        "tokenNo": 19,
        "reaction": "First Visit",
        "symptoms": "One cheek red and hot, other pale. Child only quiet when carried continuously.",
        "prescriptions": [
          {
            "id": "rx-610",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops in teaspoon water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-611",
            "remedy": "Calcarea Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "1 pinch twice daily",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-40",
    "mrn": "NK-1545",
    "fullName": "Zainab Noor",
    "relationType": "d/o",
    "relativeName": "Kamran Haider",
    "age": 23,
    "gender": "Female",
    "phone": "0301-8132769",
    "locality": "Sarai Kala",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-77",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-78",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-256",
        "patientId": "p-40",
        "date": "15 Nov 2026",
        "tokenNo": 16,
        "reaction": "Improved",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-612",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-613",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-41",
    "mrn": "NK-1546",
    "fullName": "Azan Malik",
    "relationType": "s/o",
    "relativeName": "Malik Noman",
    "age": 11,
    "gender": "Child",
    "phone": "0302-8795419",
    "locality": "GT Road Taxila",
    "totalVisits": 4,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-79",
        "name": "Chronic Frontal Sinusitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "2 yrs"
      },
      {
        "id": "cc-80",
        "name": "Post-Nasal Drip",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-257",
        "patientId": "p-41",
        "date": "21 Nov 2026",
        "tokenNo": 65,
        "reaction": "Decline",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-614",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-615",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 4. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-258",
        "patientId": "p-41",
        "date": "14 Nov 2026",
        "tokenNo": 21,
        "reaction": "No Change",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-616",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-617",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 3. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-259",
        "patientId": "p-41",
        "date": "31 Oct 2026",
        "tokenNo": 32,
        "reaction": "Decline",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-618",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-619",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-260",
        "patientId": "p-41",
        "date": "15 Oct 2026",
        "tokenNo": 31,
        "reaction": "First Visit",
        "symptoms": "Thick, yellow ropy tenacious mucus. Frontal headache above root of nose.",
        "prescriptions": [
          {
            "id": "rx-620",
            "remedy": "Hydrastis Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-621",
            "remedy": "Kali Bichromicum",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 800,
        "feeStatus": "Paid"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Frontal Sinusitis",
      "overallRelief": "Under evaluation",
      "history": [
        {
          "label": "31 Oct",
          "date": "31 Oct 2026",
          "score": 85
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 60
        },
        {
          "label": "Latest",
          "date": "21 Nov 2026",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "p-42",
    "mrn": "NK-1547",
    "fullName": "Arham Jawad",
    "relationType": "s/o",
    "relativeName": "Jawad Hassan",
    "age": 2,
    "gender": "Child",
    "phone": "0321-2299954",
    "locality": "Museum Road Taxila",
    "totalVisits": 1,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-81",
        "name": "Difficult Dentition Irritability",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "3 wks"
      },
      {
        "id": "cc-82",
        "name": "Night Grinding & Diarrhea",
        "severity": "Mild",
        "trend": "Stable",
        "duration": "2 wks"
      }
    ],
    "pastVisits": [
      {
        "id": "v-261",
        "patientId": "p-42",
        "date": "20 Nov 2026",
        "tokenNo": 11,
        "reaction": "Decline",
        "symptoms": "One cheek red and hot, other pale. Child only quiet when carried continuously.",
        "prescriptions": [
          {
            "id": "rx-622",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops in teaspoon water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-623",
            "remedy": "Calcarea Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "1 pinch twice daily",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-43",
    "mrn": "NK-1548",
    "fullName": "Nighat Yasmeen",
    "relationType": "w/o",
    "relativeName": "Tariq Mehmood",
    "age": 52,
    "gender": "Female",
    "phone": "0302-4879923",
    "locality": "HIT Colony",
    "totalVisits": 2,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-83",
        "name": "Chronic Gastritis & GERD",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "8 mos"
      },
      {
        "id": "cc-84",
        "name": "Flatulence & Bloating",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-262",
        "patientId": "p-43",
        "date": "19 Nov 2026",
        "tokenNo": 60,
        "reaction": "Improved",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-624",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": false
          },
          {
            "id": "rx-625",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Paid"
      },
      {
        "id": "v-263",
        "patientId": "p-43",
        "date": "05 Nov 2026",
        "tokenNo": 54,
        "reaction": "First Visit",
        "symptoms": "Sour eructations after oily food and late night dinners. Heaviness in epigastrium.",
        "prescriptions": [
          {
            "id": "rx-626",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills at bedtime",
            "isRepeat": true
          },
          {
            "id": "rx-627",
            "remedy": "Carbo Vegetabilis",
            "potency": "30C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 packet 30 mins after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-44",
    "mrn": "NK-1549",
    "fullName": "Mohammad Rizwan",
    "relationType": "s/o",
    "relativeName": "Muhammad Shafi",
    "age": 35,
    "gender": "Male",
    "phone": "0300-7381734",
    "locality": "Lalarukh Wah",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-85",
        "name": "Renal Colic (Right Kidney)",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "3 wks"
      },
      {
        "id": "cc-86",
        "name": "Dysuria (Burning Micturition)",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 wk"
      }
    ],
    "pastVisits": [
      {
        "id": "v-264",
        "patientId": "p-44",
        "date": "18 Nov 2026",
        "tokenNo": 54,
        "reaction": "Decline",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-628",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-629",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-45",
    "mrn": "NK-1550",
    "fullName": "Waqas Rasheed",
    "relationType": "s/o",
    "relativeName": "Rasheed Ahmed",
    "age": 37,
    "gender": "Male",
    "phone": "0321-4681284",
    "locality": "Faisal Hills",
    "totalVisits": 2,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-87",
        "name": "Left Lumbar Sciatica",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-265",
        "patientId": "p-45",
        "date": "17 Nov 2026",
        "tokenNo": 52,
        "reaction": "Improved",
        "symptoms": "Cramping shooting pain down left sciatic nerve. Ameliorated by hard pressure and bending double.",
        "prescriptions": [
          {
            "id": "rx-630",
            "remedy": "Colocynthis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-631",
            "remedy": "Magnesia Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "4 tablets dissolved in hot water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-266",
        "patientId": "p-45",
        "date": "03 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Cramping shooting pain down left sciatic nerve. Ameliorated by hard pressure and bending double.",
        "prescriptions": [
          {
            "id": "rx-632",
            "remedy": "Colocynthis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-633",
            "remedy": "Magnesia Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "4 tablets dissolved in hot water TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-46",
    "mrn": "NK-1551",
    "fullName": "Maryam Nawaz",
    "relationType": "d/o",
    "relativeName": "Zafar Iqbal",
    "age": 24,
    "gender": "Female",
    "phone": "0300-2408404",
    "locality": "GT Road Taxila",
    "totalVisits": 1,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-88",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-89",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-267",
        "patientId": "p-46",
        "date": "16 Nov 2026",
        "tokenNo": 59,
        "reaction": "Decline",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-634",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-635",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-47",
    "mrn": "NK-1552",
    "fullName": "Jahangir Khan",
    "relationType": "s/o",
    "relativeName": "Fateh Muhammad",
    "age": 54,
    "gender": "Male",
    "phone": "0345-7360682",
    "locality": "Faisal Hills",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-90",
        "name": "Left Lumbar Sciatica",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "6 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-268",
        "patientId": "p-47",
        "date": "15 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Cramping shooting pain down left sciatic nerve. Ameliorated by hard pressure and bending double.",
        "prescriptions": [
          {
            "id": "rx-636",
            "remedy": "Colocynthis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-637",
            "remedy": "Magnesia Phosphorica",
            "potency": "6X",
            "vehicle": "Powder (Packets)",
            "dosage": "4 tablets dissolved in hot water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-48",
    "mrn": "NK-1553",
    "fullName": "Aisha Siddiqua",
    "relationType": "w/o",
    "relativeName": "Imtiaz Ahmed",
    "age": 29,
    "gender": "Female",
    "phone": "0333-2151225",
    "locality": "Railway Scheme Wah",
    "totalVisits": 3,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-91",
        "name": "Renal Colic (Right Kidney)",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "3 wks"
      },
      {
        "id": "cc-92",
        "name": "Dysuria (Burning Micturition)",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 wk"
      }
    ],
    "pastVisits": [
      {
        "id": "v-269",
        "patientId": "p-48",
        "date": "21 Nov 2026",
        "tokenNo": 20,
        "reaction": "No Change",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-638",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-639",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 3. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-270",
        "patientId": "p-48",
        "date": "14 Nov 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-640",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-641",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-271",
        "patientId": "p-48",
        "date": "31 Oct 2026",
        "tokenNo": 48,
        "reaction": "First Visit",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-642",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-643",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ],
    "severityTrend": {
      "complaintName": "Renal Colic (Right Kidney)",
      "overallRelief": "Under evaluation",
      "history": [
        {
          "label": "31 Oct",
          "date": "31 Oct 2026",
          "score": 85
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 60
        },
        {
          "label": "Latest",
          "date": "21 Nov 2026",
          "score": 75
        }
      ]
    }
  },
  {
    "id": "p-49",
    "mrn": "NK-1554",
    "fullName": "Shamim Akhtar",
    "relationType": "w/o",
    "relativeName": "Malik Farooq",
    "age": 68,
    "gender": "Female",
    "phone": "0301-3747534",
    "locality": "Faisal Hills",
    "totalVisits": 2,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-93",
        "name": "Osteoarthritis (Bilateral Knees)",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "3 yrs"
      },
      {
        "id": "cc-94",
        "name": "Morning Stiffness",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "pastVisits": [
      {
        "id": "v-272",
        "patientId": "p-49",
        "date": "20 Nov 2026",
        "tokenNo": 49,
        "reaction": "Decline",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-644",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": false
          },
          {
            "id": "rx-645",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports decline state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 800,
        "feeStatus": "Paid"
      },
      {
        "id": "v-273",
        "patientId": "p-49",
        "date": "12 Nov 2026",
        "tokenNo": 32,
        "reaction": "First Visit",
        "symptoms": "Stiffness worse after first motion, ameliorated by continued slow walking. Swelling on medial joint line.",
        "prescriptions": [
          {
            "id": "rx-646",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD before meals",
            "isRepeat": true
          },
          {
            "id": "rx-647",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops in water SOS during movement pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 1000,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-50",
    "mrn": "NK-1555",
    "fullName": "Saira Bano",
    "relationType": "w/o",
    "relativeName": "Waqas Rasheed",
    "age": 36,
    "gender": "Female",
    "phone": "0334-3030966",
    "locality": "Railway Scheme Wah",
    "totalVisits": 2,
    "lastVisitDate": "19 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-95",
        "name": "Renal Colic (Right Kidney)",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "3 wks"
      },
      {
        "id": "cc-96",
        "name": "Dysuria (Burning Micturition)",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 wk"
      }
    ],
    "pastVisits": [
      {
        "id": "v-274",
        "patientId": "p-50",
        "date": "19 Nov 2026",
        "tokenNo": 65,
        "reaction": "Improved",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-648",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-649",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 1000,
        "feeStatus": "Paid"
      },
      {
        "id": "v-275",
        "patientId": "p-50",
        "date": "05 Nov 2026",
        "tokenNo": 63,
        "reaction": "First Visit",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-650",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": true
          },
          {
            "id": "rx-651",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 7,
        "fee": 300,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-51",
    "mrn": "NK-1556",
    "fullName": "Fozia Shaheen",
    "relationType": "w/o",
    "relativeName": "Khalid Mehmood",
    "age": 49,
    "gender": "Female",
    "phone": "0312-7076506",
    "locality": "GT Road Taxila",
    "totalVisits": 1,
    "lastVisitDate": "18 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-97",
        "name": "Irregular Oligomenorrhea (PCOD)",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      },
      {
        "id": "cc-98",
        "name": "Acne Vulgaris",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "8 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-276",
        "patientId": "p-51",
        "date": "18 Nov 2026",
        "tokenNo": 35,
        "reaction": "Improved",
        "symptoms": "Menses delayed by 40-50 days. Weepy mild disposition, craves open fresh air.",
        "prescriptions": [
          {
            "id": "rx-652",
            "remedy": "Pulsatilla Nigricans",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          },
          {
            "id": "rx-653",
            "remedy": "Sepia Officinalis",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills once weekly",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-52",
    "mrn": "NK-1557",
    "fullName": "Rehana Kausar",
    "relationType": "w/o",
    "relativeName": "Munir Ahmed",
    "age": 55,
    "gender": "Female",
    "phone": "0321-8307727",
    "locality": "Gulshan-e-Anwar",
    "totalVisits": 2,
    "lastVisitDate": "17 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-99",
        "name": "Right-Sided Migraine",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      },
      {
        "id": "cc-100",
        "name": "Photophobia & Nausea",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "pastVisits": [
      {
        "id": "v-277",
        "patientId": "p-52",
        "date": "17 Nov 2026",
        "tokenNo": 58,
        "reaction": "No Change",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-654",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-655",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 2. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 10,
        "fee": 300,
        "feeStatus": "Paid"
      },
      {
        "id": "v-278",
        "patientId": "p-52",
        "date": "03 Nov 2026",
        "tokenNo": 49,
        "reaction": "First Visit",
        "symptoms": "Pain begins in occiput, spreads upward settling over right eye. Aggravated by sun exposure and noise.",
        "prescriptions": [
          {
            "id": "rx-656",
            "remedy": "Sanguinaria Canadensis",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "10 drops TDS",
            "isRepeat": true
          },
          {
            "id": "rx-657",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills SOS during acute throbbing attack",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports first visit state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-53",
    "mrn": "NK-1558",
    "fullName": "Tahira Parveen",
    "relationType": "w/o",
    "relativeName": "Abdul Rehman",
    "age": 45,
    "gender": "Female",
    "phone": "0300-9293086",
    "locality": "Gulshan-e-Anwar",
    "totalVisits": 1,
    "lastVisitDate": "16 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-101",
        "name": "Dry Pruritic Eczema",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1.5 yrs"
      },
      {
        "id": "cc-102",
        "name": "Skin Cracks on Hands",
        "severity": "Mild",
        "trend": "Declining",
        "duration": "4 mos"
      }
    ],
    "pastVisits": [
      {
        "id": "v-279",
        "patientId": "p-53",
        "date": "16 Nov 2026",
        "tokenNo": 44,
        "reaction": "No Change",
        "symptoms": "Intense itching worse at night under warm bed clothing. Sticky honey-like exudation on folds.",
        "prescriptions": [
          {
            "id": "rx-658",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills weekly single dose",
            "isRepeat": false
          },
          {
            "id": "rx-659",
            "remedy": "Graphites",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-54",
    "mrn": "NK-1559",
    "fullName": "Farhat Shahzadi",
    "relationType": "w/o",
    "relativeName": "Saeed-ur-Rehman",
    "age": 61,
    "gender": "Female",
    "phone": "0334-1170307",
    "locality": "Model Town Taxila",
    "totalVisits": 1,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-103",
        "name": "Allergic Bronchitis",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "2 yrs"
      },
      {
        "id": "cc-104",
        "name": "Nocturnal Wheezing",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 mo"
      }
    ],
    "pastVisits": [
      {
        "id": "v-280",
        "patientId": "p-54",
        "date": "15 Nov 2026",
        "tokenNo": 31,
        "reaction": "Improved",
        "symptoms": "Dyspnea aggravated midnight 1 to 2 AM. Relief by sitting propped up and drinking warm sips.",
        "prescriptions": [
          {
            "id": "rx-660",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills twice daily",
            "isRepeat": false
          },
          {
            "id": "rx-661",
            "remedy": "Blatta Orientalis",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops warm water TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports improved state. Advised dietary restrictions and regular intake.",
        "durationDays": 21,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-55",
    "mrn": "NK-1560",
    "fullName": "Munir Ahmed",
    "relationType": "s/o",
    "relativeName": "Muhammad Hanif",
    "age": 75,
    "gender": "Male",
    "phone": "0321-8519121",
    "locality": "Railway Scheme Wah",
    "totalVisits": 1,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-105",
        "name": "Renal Colic (Right Kidney)",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "3 wks"
      },
      {
        "id": "cc-106",
        "name": "Dysuria (Burning Micturition)",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 wk"
      }
    ],
    "pastVisits": [
      {
        "id": "v-281",
        "patientId": "p-55",
        "date": "21 Nov 2026",
        "tokenNo": 40,
        "reaction": "No Change",
        "symptoms": "Sharp cutting pain right lumbar radiating to groin. Reddish sand in urine.",
        "prescriptions": [
          {
            "id": "rx-662",
            "remedy": "Berberis Vulgaris",
            "potency": "Q",
            "vehicle": "Mother Tincture",
            "dosage": "15 drops in water TDS",
            "isRepeat": false
          },
          {
            "id": "rx-663",
            "remedy": "Lycopodium Clavatum",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills OD morning",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow-up visit 1. Patient reports no change state. Advised dietary restrictions and regular intake.",
        "durationDays": 15,
        "fee": 600,
        "feeStatus": "Paid"
      }
    ]
  }
];
