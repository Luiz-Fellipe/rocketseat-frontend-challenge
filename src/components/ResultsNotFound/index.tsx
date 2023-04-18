//Styles
import { ResultsNotFoundWrapper } from "./styles";

export function ResultsNotFound() {
  return (
    <ResultsNotFoundWrapper data-testid="results-not-found">
      <span>
        We did not find any results, please try changing the filters applied.
      </span>
    </ResultsNotFoundWrapper>
  );
}
