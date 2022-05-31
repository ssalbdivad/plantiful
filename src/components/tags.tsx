import { Chip, Stack } from "@mui/material"

export type TagsProps = {
    children: string[]
}

export const Tags = ({ children }: TagsProps) => (
    <Stack direction="row" spacing={1}>
        {children.map((tag) => (
            <Chip key={tag} color="success" size="small" label={`#${tag}`} />
        ))}
    </Stack>
)
