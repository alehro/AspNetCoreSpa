import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Validators } from '@angular/forms';

import { Gender } from '../crud-shop/crud-shop.models';
import { FieldTypes, IAppTableOptions } from '@app/models';
import { CustomerDto, GenderDtoe_ } from '../_TsDtos/CustomerDto';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../_TsDtos/OrderDto';
import { ArrayExt} from '../CsTypes';
import * as _ from 'lodash';

@Component({
  selector: 'appc-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild('addressTemplate', { static: true }) addressTemplate: TemplateRef<any>;
    @ViewChild('genderTemplate', { static: true }) genderTemplate: TemplateRef<any>;
    options: IAppTableOptions<CustomerDto>;
    totalTotals: number;
    malesCount: number;
    femalesCount: number;
  constructor(private http: HttpClient) { }

    async ngOnInit() {
        

        let t1: CustomerDto = new CustomerDto();
        this.options = {
          title: 'Customer list',
          apiUrl: 'api/customer',
          detailsTemplate: this.addressTemplate,
          columns: [
            { prop: 'name', name: 'Name', fieldType: FieldTypes.Textbox, fieldValidations: [Validators.required] },
            { prop: 'email', name: 'Email', fieldType: FieldTypes.Email, fieldValidations: [Validators.required] },
            { prop: 'dateOfBirth', name: 'Date of birth', fieldType: FieldTypes.Date, fieldValidations: [Validators.required] },
            { prop: 'phoneNumber', name: 'Phone number', fieldType: FieldTypes.Number },
            { prop: 'address', name: 'Address', fieldType: FieldTypes.Textarea },
              //{ prop: 'city', name: 'City', fieldType: FieldTypes.Textbox },
            //  { prop: 'totalPrice()', name: 'Total', fieldType: FieldTypes.Number },
            {
              prop: 'gender',
              name: 'Gender',
              cellTemplate: this.genderTemplate,
              fieldType: FieldTypes.Select,
              fieldOptions: [
                { key: Gender.Male, value: 'Male' },
                { key: Gender.Female, value: 'Female' }
              ]
            }
          ]
        };
        //let v22 = V22();
        //demo of working with transpiled expressions (including some linq)
        let customers = await this.http.get<CustomerDto[]>("api/customer").toPromise();
        //let cs2 = new CustomerDto();//{ or:""};
        //cs2.orders = <ArrayExt<OrderDto>><any>[{ id: 1, price: 2, discount: 0, comments: 'none' }];
        //let r2 = cs2.totalPrice();
        let css = customers.map(i => {
            //let cs = { ...new CustomerDto(), ...i};
            let cs0 = new CustomerDto();
            let cs = _.extend(cs0, i);
            return cs;
        });
        this.totalTotals = css.reduce((sum, customer: CustomerDto) => {
            return sum + customer.totalPrice();
        }, 0);
        //demo of working with enums
        this.malesCount = css.filter(i => i.gender == GenderDtoe_("Male")).length;
        this.femalesCount = css.filter(i => i.gender == GenderDtoe_("Female")).length;
  }

}
