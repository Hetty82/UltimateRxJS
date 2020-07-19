import { fromEvent, interval } from "rxjs";
import { map, takeUntil, takeWhile } from "rxjs/operators";
import { observer } from "./helpers";

const counter$ = interval(1000);
const click$ = fromEvent(document, "click");

const clickPositions$ = click$.pipe(
  map((event) => ({ x: event.clientX, y: event.clientY }))
);

// clickPositions$.pipe(first(({ y }) => y > 200)).subscribe(observer("first"));
clickPositions$
  .pipe(takeWhile(({ y }) => y <= 200, true))
  .subscribe(observer("takeWhile"));

counter$.pipe(takeUntil(click$)).subscribe(observer("takeUntil"));
