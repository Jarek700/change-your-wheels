import { Controller, Get,Patch,Param } from '@nestjs/common';
import { ListOfCompanies, SingleCompany } from './types/admin-panel.types';

import { companies } from './dummyDataCompanies';

@Controller('/admin-panel')
export class AdminPanelController {
  
    @Get('/')
    getListCompanies(    
    ):ListOfCompanies{
        return companies
    }

    @Patch('/:id')
    updateComapnyDetails(
        @Param('id') companyId:string
    ):SingleCompany|any {
        const findCompany = companies.find(obj => obj.companyId === companyId)
        console.log(findCompany)
        return findCompany
    }
}
