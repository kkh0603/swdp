import React from "react"
import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from '../components/main/home_component/Home';
import { Order } from '../components/main/order_component/Order';
import { Cart } from '../components/main/cart_component/Cart';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const MainRoute = () =>{

  let orderCategory = useSelector((state:RootState)=> state.operatePath.orderMenu)
  let userCategory = useSelector((state:RootState)=> state.operatePath.userMenu)

  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/order/*' element={<React.Fragment>
                                          <Outlet></Outlet>
                                        </React.Fragment>}> 
          {
            orderCategory.map((a)=>{
              return (
                <Route key={a} path={a} element={<Order/>}/>
                )
              })
            }
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/user/*'element={<React.Fragment>
                                          <Outlet></Outlet>
                                        </React.Fragment>}>
          {
            userCategory.map((a)=>{
              return (
                <Route key={a} path={a} element={<div>{a}</div>}/>
              )
            })
          }
        </Route>
      </Routes>
    </React.Fragment>

  )
}