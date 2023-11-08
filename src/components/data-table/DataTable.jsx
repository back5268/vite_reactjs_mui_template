import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import { useEffect } from 'react';
import { SubCard } from '../cards';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from 'react-router-dom';

const DataTable = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    count = 0,
    items = [],
    columns = [],
    params = { page: 1, limit: 10 },
    setParams,
    dataKey = 'id',
    selected,
    setSelected,
    route,
    setVisibleDialog,
    headerInfo,
    actionInfo
  } = props;
  const { deleteAction, handleDelete } = actionInfo || {};

  const handleRowsPerPageChange = (event) => {
    setParams((pre) => ({ ...pre, limit: event.target.value }));
  };

  const handlePageChange = (event, value) => {
    setParams((pre) => ({ ...pre, page: value }));
  };

  const onDelete = (e) => {
    console.log(e);
  }

  useEffect(() => {
    setSelected?.([]);
  }, [params]);

  return (
    <SubCard>
      <Box sx={{ minWidth: 800 }}>
        {Boolean(headerInfo) && (
          <Box display={'flex'} justifyContent={'flex-start'} mb={2}>
            {(route || setVisibleDialog) && (
              <Button
                onClick={setVisibleDialog ? () => setVisibleDialog((pre) => !pre) : () => navigate(route + '/insert')}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Thêm mới
              </Button>
            )}
          </Box>
        )}
        <Table>
          <TableHead style={{ backgroundColor: theme.palette.secondary.light }}>
            <TableRow>
              {Boolean(selected) && Boolean(setSelected) && (
                <TableCell padding="checkbox">
                  <Checkbox
                    defaultValue={false}
                    checked={items.length === selected.length}
                    onChange={() => {
                      if (items.length === selected.length) {
                        setSelected([]);
                      } else setSelected([...items.map((i) => i[dataKey])]);
                    }}
                  />
                </TableCell>
              )}
              <TableCell>STT</TableCell>
              {columns.map((column, index) => (
                <TableCell key={index}>{column.label}</TableCell>
              ))}
              {Boolean(actionInfo) && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {Boolean(selected) && Boolean(setSelected) && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(row[dataKey])}
                      onChange={() => {
                        if (selected.includes(row[dataKey])) {
                          setSelected((pre) => [...pre.filter((p) => p !== row[dataKey])]);
                        } else setSelected((pre) => [...pre, row[dataKey]]);
                      }}
                    />
                  </TableCell>
                )}
                <TableCell>{rowIndex + 1}</TableCell>
                {columns.map((column, index) => (
                  <TableCell key={index}>{column.body?.(row) || row[column.field]}</TableCell>
                ))}
                {Boolean(actionInfo) && (
                  <TableCell>
                    {Boolean(deleteAction) && (
                      <IconButton onClick={() => onDelete(row[dataKey])} color="error" aria-label="delete">
                        <DeleteOutlinedIcon />
                      </IconButton>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
            {!items[0] && (
              <TableRow>
                <TableCell colSpan={12}>
                  <Typography variant="h5" component="div" align="center" mt={1} mb={1}>
                    Không tìm thấy dữ liệu
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
      <Stack direction="row" flex justifyContent="space-between" alignItems={'center'}>
        <Typography variant="h6" component="div" ml={4}>
          {selected && selected[0] && 'Đã chọn ' + selected.length}
        </Typography>
        <TablePagination
          component="div"
          count={count}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          page={params.page - 1}
          rowsPerPage={params.limit}
          rowsPerPageOptions={[10, 20, 50]}
        />
      </Stack>
    </SubCard>
  );
};

DataTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array
};

export default DataTable;
