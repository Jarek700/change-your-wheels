import { Controller, Get } from '@nestjs/common';

interface SingleCompany {
    companyId: string;
    companyName: string;
    numberOfChangingSport: number;
    workingHoursPerDay: number;
    reservationTimeInMinutes: number;
}

type ListOfCompanies = SingleCompany[];

@Controller('/admin-panel')
export class AdminPanelController {

    companies:ListOfCompanies = [
        {
            companyId: '1',
            companyName: 'Change Your Wheels Pro',
            numberOfChangingSport: 2,
            workingHoursPerDay: 10,
            reservationTimeInMinutes: 30,
        },
        {
            companyId: '2',
            companyName: 'Fast wheel change and fix',
            numberOfChangingSport: 1,
            workingHoursPerDay: 6,
            reservationTimeInMinutes: 15,
        }
    ]

    @Get('/')
    getListCompanies(    
    ):ListOfCompanies{
        return this.companies
    }
}
