import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { InitialStateType, loadingAC } from "./bll/loadingReducer";
import store, { AppStoreType } from "./bll/store";
import { Loading } from "./Neon/Loading";

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, InitialStateType>(store => store.loading);
  const dispatch = useDispatch()
  const setLoading = () => {
    // dispatch
    // setTimeout
    dispatch(loadingAC())
    setTimeout(() => {
      dispatch(loadingAC())
    }, 1000)
    console.log("loading...");
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading.loading
        ? (
          <Loading />
        ) : (
          <div>
            <SuperButton text={'set loading...'} onClick={setLoading}></SuperButton>
          </div>
        )
      }

      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
