import { TableCell, Tooltip } from "@mui/material";

function RankingStat({ result, styles, forecastView }) {
    return (
        <TableCell
            align="right"
            sx={{
                ...styles.cell,
                ...styles.ranking,
                ...(result.advancing ? styles.advancing : {}),
                ...(result.advancingQuestionable
                    ? styles.advancingQuestionable
                    : {}),
            }}
        >
            {result.ranking}
            {forecastView &&
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
