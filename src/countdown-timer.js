import { interval } from "rxjs";
import { filter, mapTo, scan } from "rxjs/operators";

// elements
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

// counter
const counter$ = interval(1000);

counter$
  .pipe(
    mapTo(-1),
    scan((sum, current) => {
      return sum + current;
    }, 10),
    filter((value) => value >= 0)
  )
  .subscribe((value) => {
    countdownEl.innerText = value;
    if (!value) {
      messageEl.innerText = "Liftoff!";
    }
  });
