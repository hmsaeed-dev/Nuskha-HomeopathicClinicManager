import { Patient } from '@/types';

export const INITIAL_PATIENTS: Patient[] = [
  {
    id: 'p-1',
    mrn: 'NK-1492',
    fullName: 'Fatima Bibi',
    relationType: 'w/o',
    relativeName: 'Tariq Mehmood',
    age: 42,
    gender: 'Female',
    phone: '0300-8841290',
    locality: 'Taxila Cantt',
    totalVisits: 4,
    lastVisitDate: '14 Nov 2026',
    chiefComplaints: [
      { id: 'cc-1', name: 'Migraine', severity: 'Mild', trend: 'Improving', duration: '4 yrs' },
      { id: 'cc-2', name: 'Gastric Acidity', severity: 'Moderate', trend: 'Stable', duration: '6 mos' },
    ],
    severityTrend: {
      complaintName: 'Migraine',
      overallRelief: '-70% relief',
      history: [
        { label: '12 Oct', date: '12 Oct 2026', score: 90 },
        { label: '29 Oct', date: '29 Oct 2026', score: 75 },
        { label: '14 Nov', date: '14 Nov 2026', score: 40 },
        { label: 'Today', date: '21 Nov 2026', score: 25 },
      ]
    },
    pastVisits: [
      {
        id: 'v-101',
        patientId: 'p-1',
        date: '14 Nov 2026',
        tokenNo: 48,
        reaction: 'Improved',
        symptoms: 'Migraine reduced by 50%; mild morning acidity persists.',
        durationDays: 14,
        prescriptions: [
          {
            id: 'rx-1',
            remedy: 'Bryonia Alba',
            potency: '200C',
            vehicle: 'Drops (Water)',
            dosage: '3 drops BD in half cup water',
            isRepeat: true
          },
          {
            id: 'rx-2',
            remedy: 'Nux Vomica',
            potency: '30C',
            vehicle: 'Pills (Globules)',
            dosage: '4 pills HS before bed'
          }
        ],
        doctorNotes: 'Patient responding well to Bryonia. Continue for 2 weeks.',
        fee: 500,
        feeStatus: 'Paid'
      },
      {
        id: 'v-102',
        patientId: 'p-1',
        date: '29 Oct 2026',
        tokenNo: 32,
        reaction: 'No Change',
        symptoms: 'Severe frontal headache < motion, gastric heaviness after lunch.',
        durationDays: 15,
        prescriptions: [
          {
            id: 'rx-3',
            remedy: 'Bryonia Alba',
            potency: '30C',
            vehicle: 'Drops (Water)',
            dosage: '3 drops TDS'
          }
        ],
        fee: 500,
        feeStatus: 'Paid'
      },
      {
        id: 'v-103',
        patientId: 'p-1',
        date: '12 Oct 2026',
        tokenNo: 19,
        reaction: 'First Visit',
        symptoms: 'Chronic migraine episodes since 3 months, nausea during sunrise.',
        durationDays: 15,
        prescriptions: [
          {
            id: 'rx-4',
            remedy: 'Belladonna',
            potency: '200C',
            vehicle: 'Pills (Globules)',
            dosage: '4 pills BD'
          }
        ],
        fee: 500,
        feeStatus: 'Paid'
      }
    ]
  },
  {
    id: 'p-2',
    mrn: 'NK-0819',
    fullName: 'Fatima Bibi',
    relationType: 'd/o',
    relativeName: 'Haji Akbar',
    age: 26,
    gender: 'Female',
    phone: '0321-5512398',
    locality: 'Mohallah Farooqia',
    totalVisits: 2,
    lastVisitDate: '02 Nov 2026',
    chiefComplaints: [
      { id: 'cc-3', name: 'Eczema / Skin Allergy', severity: 'Moderate', trend: 'Improving', duration: '1 yr' },
      { id: 'cc-4', name: 'Allergic Rhinitis', severity: 'Mild', trend: 'Stable', duration: '2 yrs' },
    ],
    severityTrend: {
      complaintName: 'Eczema',
      overallRelief: '-40% relief',
      history: [
        { label: '18 Oct', date: '18 Oct 2026', score: 80 },
        { label: '02 Nov', date: '02 Nov 2026', score: 50 },
      ]
    },
    pastVisits: [
      {
        id: 'v-201',
        patientId: 'p-2',
        date: '02 Nov 2026',
        tokenNo: 21,
        reaction: 'Improved',
        symptoms: 'Allergic rhinitis and morning sneezing subsided.',
        durationDays: 14,
        prescriptions: [
          {
            id: 'rx-21',
            remedy: 'Allium Cepa',
            potency: '30C',
            vehicle: 'Drops (Water)',
            dosage: '4 drops BD'
          }
        ],
        fee: 400,
        feeStatus: 'Paid'
      }
    ]
  },
  {
    id: 'p-3',
    mrn: 'NK-1305',
    fullName: 'Fatima Bibi',
    relationType: 'w/o',
    relativeName: 'Ghulam Rasool',
    age: 58,
    gender: 'Female',
    phone: '0345-9988112',
    locality: 'Wah Model Town',
    totalVisits: 6,
    lastVisitDate: '10 Nov 2026',
    chiefComplaints: [
      { id: 'cc-5', name: 'Knee Osteoarthritis', severity: 'Moderate', trend: 'Improving', duration: '5 yrs' },
      { id: 'cc-6', name: 'Insomnia', severity: 'Mild', trend: 'Improving', duration: '1 yr' },
    ],
    severityTrend: {
      complaintName: 'Knee Osteoarthritis',
      overallRelief: '-50% relief',
      history: [
        { label: '20 Oct', date: '20 Oct 2026', score: 90 },
        { label: '10 Nov', date: '10 Nov 2026', score: 45 },
      ]
    },
    pastVisits: [
      {
        id: 'v-301',
        patientId: 'p-3',
        date: '10 Nov 2026',
        tokenNo: 54,
        reaction: 'Improved',
        symptoms: 'Knee joint pain relief after Arnica.',
        durationDays: 20,
        prescriptions: [
          {
            id: 'rx-31',
            remedy: 'Arnica Montana',
            potency: '200C',
            vehicle: 'Pills (Globules)',
            dosage: '4 pills BD'
          }
        ],
        fee: 500,
        feeStatus: 'Paid'
      }
    ]
  },
  {
    id: 'p-4',
    mrn: 'NK-1502',
    fullName: 'Muhammad Tariq',
    relationType: 's/o',
    relativeName: 'Abdul Rehman',
    age: 38,
    gender: 'Male',
    phone: '0300-1122334',
    locality: 'Taxila Cantt',
    totalVisits: 3,
    lastVisitDate: '16 Nov 2026',
    chiefComplaints: [
      { id: 'cc-7', name: 'Renal Colic (Kidney Stone)', severity: 'Severe', trend: 'Aggravating', duration: '3 wks' },
    ],
    pastVisits: []
  },
  {
    id: 'p-5',
    mrn: 'NK-1510',
    fullName: 'Sadia Parveen',
    relationType: 'w/o',
    relativeName: 'Kamran Khan',
    age: 31,
    gender: 'Female',
    phone: '0312-3344556',
    locality: 'Lala Rukh',
    totalVisits: 1,
    lastVisitDate: '19 Nov 2026',
    chiefComplaints: [
      { id: 'cc-8', name: 'Dry Cough & Congestion', severity: 'Moderate', trend: 'Stable', duration: '5 days' },
    ],
    pastVisits: []
  }
];

export const COMMON_REMEDIES = [
  'Aconitum Napellus',
  'Allium Cepa',
  'Apis Mellifica',
  'Arnica Montana',
  'Arsenicum Album',
  'Belladonna',
  'Bryonia Alba',
  'Calcarea Carbonica',
  'Carbo Vegetabilis',
  'Causticum',
  'Chamomilla',
  'Cinchona (China)',
  'Dulcamara',
  'Gelsemium',
  'Hepar Sulphuris',
  'Hypericum',
  'Ignatia Amara',
  'Ipecacuanha',
  'Lachesis',
  'Lycopodium',
  'Mercurius Solubilis',
  'Natrum Muriaticum',
  'Nux Vomica',
  'Phosphorus',
  'Pulsatilla',
  'Rhus Toxicodendron',
  'Ruta Graveolens',
  'Sepia',
  'Silicea',
  'Sulphur',
  'Thuja Occidentalis'
];

export const COMMON_POTENCIES = ['30C', '200C', '1M', '10M', '50M', 'Q (Mother Tincture)', '6X', '12X'];

export const DISPENSING_VEHICLES: Array<'Pills (Globules)' | 'Drops (Water)' | 'Powder (Packets)' | 'Mother Tincture'> = [
  'Drops (Water)',
  'Pills (Globules)',
  'Powder (Packets)',
  'Mother Tincture'
];

export const DOSAGE_MACROS = [
  '3 drops BD in water',
  '4 pills TDS',
  '1 powder HS',
  '4 pills BD',
  '1 dose SOS'
];

export const LOCALITY_PRESETS = [
  'Taxila Cantt',
  'Mohallah Farooqia',
  'Wah Model Town',
  'Lala Rukh',
  'Sarai Kala',
  'Museum Road',
  'Faisal Hills'
];
