//Caution, this file is autogenerated by TsGenerator module. Don't change the file by hands.
import { Gender, DateTimeOffset, ICollection, Dictionary, IEnumerable, IList, List, strEnum} from '../CsTypes';import {BaseDto} from './BaseDto';
import {OrderDto} from './OrderDto';
export const GenderDtoe = strEnum([ 
	"None",
	"Male",
	"Female" 
]);
export var GenderDtoe_ = (type: keyof typeof GenderDtoe)=>{
  return GenderDtoe[type];
}
export class CustomerDto extends BaseDto 
{
/*[Required]*/
 public name: string ;
/*[Required]*/
 public email: string ;
/*[Required]
        [DataType(DataType.Date)]*/
 public dateOfBirth: Date ;
/*[Required]*/
 public phoneNumber: string ;
/*[Required]*/
 public address: string ;
 public city: string ;
/*[Required]*/
 public gender: string ;
 public orders: ICollection<OrderDto>  ;
public totalPrice (): number
{
return this.orders.Sum(i => i.price);
} 
}