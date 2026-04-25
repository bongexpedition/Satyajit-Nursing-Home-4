
import { Doctor, Department } from '../types';

export const departments: Department[] = [
  { id: 'orthopedic', name: 'Orthopedic', description: 'Expert care for bones, joints, and muscular systems.', icon: 'Bone' },
  { id: 'gynecology', name: 'Gynecology', description: 'Comprehensive women healthcare and maternity services.', icon: 'Baby' },
  { id: 'surgery', name: 'General Surgery', description: 'Advanced laparoscopic and general surgical procedures.', icon: 'Stethoscope' },
  { id: 'medicine', name: 'Medicine & Cardiology', description: 'Specialized internal medicine and cardiac care.', icon: 'Activity' },
  { id: 'urology', name: 'Urology', description: 'Specialized treatment for urinary tract and male reproductive system.', icon: 'Droplets' },
  { id: 'pediatrics', name: 'Pediatrics', description: 'Compassionate healthcare for infants, children, and adolescents.', icon: 'Smile' },
  { id: 'ent', name: 'ENT', description: 'Specialized care for Ear, Nose, and Throat conditions.', icon: 'Ear' },
  { id: 'neurology', name: 'Neurology', description: 'Expert diagnosis and treatment of brain and nervous system disorders.', icon: 'Brain' },
];

export const doctors: Doctor[] = [
  // Orthopedic
  { id: '1', name: 'Dr. Pradyumna Chakraborty', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Tuesday & Friday' },
  { id: '2', name: 'Dr. Bibhas Mondal', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Monday' },
  { id: '3', name: 'Dr. Swarnavo Duttagupta', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Monday, Wednesday & Friday' },
  { id: '4', name: 'Dr. Jaydeep Mondal', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Saturday' },
  { id: '5', name: 'Dr. Ashis Mondal', qualification: 'DNB (Ortho)', departmentId: 'orthopedic', availability: 'Saturday' },
  { id: '6', name: 'Dr. Gourab Naskar', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Saturday & Sunday' },
  { id: '7', name: 'Dr. Debjyoti Mukherjee', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Monday & Thursday' },
  { id: '8', name: 'Dr. Sarbo Haldar', qualification: 'MS(Ortho)', departmentId: 'orthopedic', availability: 'Sunday' },

  // Gynecology
  { id: '9', name: 'Dr. Manas Kumar Saha', qualification: 'DGO, MS(GYNAE), FRCS', departmentId: 'gynecology', availability: 'Sunday' },
  { id: '10', name: 'Dr. Indrajit Banerjee', qualification: 'MBBS, FWCP', departmentId: 'gynecology', availability: 'Monday, Tuesday, Wednesday & Saturday' },
  { id: '11', name: 'Dr. Tahera Parvin', qualification: 'MS, GYNAE', departmentId: 'gynecology', availability: 'Tuesday & Friday' },
  { id: '12', name: 'Dr. Amit Haldar', qualification: 'MS, GYNAE', departmentId: 'gynecology', availability: 'Tuesday' },
  { id: '13', name: 'Dr. Supti Das', qualification: 'MBBS, DGO', departmentId: 'gynecology', availability: 'Thursday' },
  { id: '14', name: 'Dr. Arun Das', qualification: 'MBBS, DGO', departmentId: 'gynecology', availability: 'On Appointment Only' },
  { id: '15', name: 'Dr. Pallab Mistri', qualification: 'MS, GYNAE', departmentId: 'gynecology', availability: 'Thursday' },
  { id: '16', name: 'Dr. Kaushik Dutta', qualification: 'MS, GYNAE', departmentId: 'gynecology', availability: 'On Appointment Only' },

  // Surgery
  { id: '17', name: 'Prof. Makhan Lal Saha', qualification: 'MS, FRCS', departmentId: 'surgery', availability: 'Wednesday' },
  { id: '18', name: 'Prof. Debabrata Roy', qualification: 'MBBS, MS', departmentId: 'surgery', availability: 'Sunday' },
  { id: '19', name: 'Dr. Ratan Naskar', qualification: 'MBBS, MS, FMAS', departmentId: 'surgery', availability: 'Tuesday' },
  { id: '20', name: 'Dr. Koustav Mondal', qualification: 'MBBS, MS', departmentId: 'surgery', availability: 'Monday' },

  // Medicine & Cardiology
  { id: '21', name: 'Dr. Ashok Choudhury', qualification: 'MBBS, DIP.CARD', departmentId: 'medicine', availability: 'On Appointment Only' },
  { id: '22', name: 'Dr. Krishna Gopal Saha', qualification: 'MBBS, D.A', departmentId: 'medicine', availability: 'Daily' },
  { id: '23', name: 'Dr. Shouvik Saha', qualification: 'MBBS, MD, DIP CARD', departmentId: 'medicine', availability: 'Daily' },

  // Urology
  { id: '24', name: 'Prof. Dilip Karmakar', qualification: 'MS, MCH', departmentId: 'urology', availability: 'On Appointment Only' },
  { id: '25', name: 'Dr. S.K. Baidya', qualification: 'DNB, MCH(URO)', departmentId: 'urology', availability: 'On Appointment Only' },
  { id: '26', name: 'Dr. Soumya Mondal', qualification: 'MS, MCH(URO)', departmentId: 'urology', availability: '2nd & 4th Saturday' },
  { id: '27', name: 'Dr. Maharaj Mondal', qualification: 'MS, MCH(URO)', departmentId: 'urology', availability: 'On Appointment Only' },

  // Pediatrics
  { id: '28', name: 'Dr. Asim Kumar Mallick', qualification: 'MD (PAED)', departmentId: 'pediatrics', availability: 'Thursday & Sunday' },
  { id: '29', name: 'Dr. Pradip Choudhury', qualification: 'DCH, MD (Paed)', departmentId: 'pediatrics', availability: 'Saturday' },
  { id: '30', name: 'Dr. Imran Khan', qualification: 'MBBS, MD (Paediatrics)', departmentId: 'pediatrics', availability: 'Tuesday & Saturday' },

  // ENT
  { id: '31', name: 'Dr. Amitabh Pain', qualification: 'MBBS, MS(ENT)', departmentId: 'ent', availability: 'Tuesday & Saturday' },

  // Neurology
  { id: '32', name: 'Dr. M. Murmu', qualification: 'MBBS, MD, DM(NEURO)', departmentId: 'neurology', availability: 'Thursday' },
];
