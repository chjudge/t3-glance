export type StudentData = {
  name: string;
  class: string;
  box_number: number;
  city: string;
  state: string;
  email: string;
  studying_abroad: string;
  building: string;
  room: string;
};

export type StudentDisplayData = {
  name: string;
  year: string;
  box_number: number;
  city: string;
  state: string;
  email: string;
  dorm: string;
  room: string;
  building: string;
  sex: string;
  roommates: StudentDisplayData[];
};


