import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _httpClient: HttpClient) { }

  // TODO: getOrders()
  // TODO: getOrder(orderId)
  // TODO: addOrder()
}
