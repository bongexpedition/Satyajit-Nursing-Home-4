
export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  departmentId: string;
  availability: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
}
