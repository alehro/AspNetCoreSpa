//33 Caution, this file is autogenerated by TsGenerator module. Don't change the file by hands.
import {ICollection, DateTimeOffset, Gender} from '../CsTypes';import {OrderDto} from './OrderDto';
export class CustomerDto 
{
 public id: number ;
 public id2: number ;
 public id3: number ;
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
/*[Required]*/
 public city: string ;
/*[Required]*/
 public gender: Gender ;
 public orders: ICollection<OrderDto>  ; 
}