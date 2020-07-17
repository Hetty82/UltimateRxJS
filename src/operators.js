/* eslint-disable no-unused-vars */
import { fromEvent, interval, of } from "rxjs";
import { map, take } from "rxjs/operators";
import { observer } from "./helpers";

const interval$ = interval().pipe(take(5));
const of$ = of(1, 2, 3, 4, 5);
const keyup$ = fromEvent(document, "keyup");

const events$ = keyup$.pipe(
  map((event) => event.code)
  // pluck("target", "nodeName")
  // mapTo("keyup event!")
);
events$.subscribe(observer("events"));
