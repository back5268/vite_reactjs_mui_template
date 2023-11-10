import { Box, Button, Grid, Stack } from '@mui/material';
import { SubCard } from '../cards';
import { FilterAlt } from '@mui/icons-material';
import { removeUndefinedProps, refreshObject } from '@utils';

const Filters = (props) => {
  const { setParams, filter, setFilter, handleFilter, sm = 12, lg = 3, ...prop } = props;

  const onClear = () => {
    setParams?.((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        render: pre.render
      };
    });
    setFilter?.({ ...refreshObject(filter) });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let filters = { ...filter };
    if (filters.dates && filters.dates[0]) {
      filters.from = databaseDate(filter.dates[0]);
      filters.to = filter.dates[1] ? databaseDate(filter.dates[1], true) : databaseDate(filter.dates[0], true);
      filters.dates = undefined;
    }
    if (handleFilter) filters = handleFilter?.(filter);
    setParams?.((pre) => {
      return {
        page: pre.page || 1,
        limit: pre.limit || 20,
        render: pre.render,
        ...removeUndefinedProps(filters)
      };
    });
  };

  return (
    <Box marginBottom={3}>
      <SubCard>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2} {...prop}>
            {props.children}
            <Grid item xs={12} sm={sm} lg={lg}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end" mt={1}>
                <Button type="button" variant="outlined" onClick={onClear}>
                  Làm mới
                </Button>
                <Button type="submit" variant="contained" endIcon={<FilterAlt />} style={{ minWidth: '96px' }}>
                  Lọc
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </SubCard>
    </Box>
  );
};

export default Filters;
