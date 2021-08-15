import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
  const theme = useSelector<AppStoreType, string>(store => store.theme.theme); // useSelector
  // useDispatch, onChangeCallback
  const dispatch = useDispatch()
  const onChangeCallback = (color: string) => {
    dispatch(changeThemeC(color))
  }

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>
        homeworks 12
      </span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <br />
      <div className={s.wrapper}>
        <SuperRadio
          name={'radio'}
          options={themes}
          value={theme}
          onChangeOption={onChangeCallback}
        />
      </div>

      <hr />
    </div>
  );
}

export default HW12;
