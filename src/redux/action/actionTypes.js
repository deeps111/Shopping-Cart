import { defineAction } from 'redux-define'
import { SUCCESS, PENDING, ERROR ,HIGH_LOW ,LOW_HIGH , DISCOUNT ,ADD ,REMOVE } from '../../constants'

export const USERS = defineAction('USERS' , [SUCCESS , PENDING , ERROR]);
export const SORT = defineAction('SORT' , [HIGH_LOW , LOW_HIGH ,DISCOUNT]);
export const FILTER = defineAction('FILTER' , []);
export const CART = defineAction('CART' , [ADD , REMOVE]);