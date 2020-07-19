import { fromEvent, interval } from "rxjs";
import { mapTo, scan, takeUntil, takeWhile } from "rxjs/operators";

// elements
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const abortEl = document.getElementById("abort");

// counter
const counter$ = interval(1000);
const abort$ = fromEvent(abortEl, "click");

counter$
  .pipe(
    mapTo(-1),
    scan((sum, current) => {
      return sum + current;
    }, 10),
    // tap(console.log),
    takeWhile((value) => value >= 0),
    takeUntil(abort$)
  )
  .subscribe((value) => {
    countdownEl.innerText = value;
    if (!value) {
      messageEl.innerText = "Liftoff!";
    }
  });
