import { TableCell, Tooltip } from "@mui/material";

function displayAdvancing(advancing, forecastView, final) {
    return advancing && !(forecastView && final);
}

function RankingStat({ result, styles, forecastView, final }) {
    return (
        <TableCell
            align="right"
            sx={{
                ...styles.cell,
                ...styles.ranking,
                ...(displayAdvancing(result.advancing, forecastView, final) ? styles.advancing : {}),
                ...(displayAdvancing(result.advancingQuestionable, forecastView, final)
                    ? styles.advancingQuestionable
                    : {}),
            }}
        >
            {result.ranking}
            {forecastView &&
                (<>
                    {" ("}
                    {/* <Tooltip title="Best possible ranking">
                        <span>{result.bestPossibleRanking}</span>
                    </Tooltip> */}
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
