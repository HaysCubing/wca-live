import { TableCell, Tooltip } from "@mui/material";

function displayAdvancing(advancing, forecastView, final) {
  return advancing && !(forecastView && final);
}

function getRankingStyle(result, forecastView, final, styles) {
  var confirmed = result.worstPossibleRanking === result.bestPossibleRanking;
  console.log("get ranking style");
  if (forecastView && final) {
    // Handled by parent
    if (confirmed) return {};
    if (result.ranking === 1) {
      return styles.forecastFirst;
    }
    if (result.ranking === 2) {
      return styles.forecastSecond;
    }
    if (result.ranking === 3) {
      return styles.forecastThird;
    }
  }
  if (result.advancing) return styles.advancing;
  if (result.advancingQuestionable) return styles.advancingQuestionable;
  return {};
}

function RankingStat({ result, styles, forecastView, final }) {
  const confirmed = forecastView && result.worstPossibleRanking === result.bestPossibleRanking;
  return (
    <TableCell
      align="right"
      sx={{
        ...styles.cell,
        ...styles.ranking,
        ...(getRankingStyle(result, forecastView, final, styles)),
        fontWeight: confirmed ? 600 : 400,
      }}
    >
      {result.ranking}
      {forecastView && !confirmed &&
        (<>
          {" ("}
          <Tooltip title="Best possible ranking">
            <span>{result.bestPossibleRanking}</span>
          </Tooltip>
          {"/"}
          <Tooltip title="Worst possible ranking">
            <span>{result.worstPossibleRanking}</span>
          </Tooltip>
          {")"}
        </>)
      }
    </TableCell>);
}

export default RankingStat;
