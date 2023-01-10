import {useCallback, useState} from "react";
import update from "immutability-helper";
import {Card} from "./Card";

export default function Board({id,card,index,title,children}) {
    return (
      <div>
        <p>{title}</p>
        <div>
          {children}
        </div>
      </div>
  )
}
