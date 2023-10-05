
export interface SingleCompany {
    companyId: string;
    companyName: string;
    numberOfChangingSport: number;
    workingHoursPerDay: number;
    reservationTimeInMinutes: number;
}

export type ListOfCompanies = SingleCompany[];