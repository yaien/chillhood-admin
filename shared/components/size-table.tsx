import { Row, Table, ButtonGroup, Button } from "reactstrap";
import { Size } from "../../lib/store";
import { FC } from "react";

export interface SizeTableProps {
  sizes: Size[];
  onDelete?(size: Size): void;
}

export const SizeTable: FC<SizeTableProps> = ({ sizes, onDelete }) => {
  return (
    <Table className="text-center" size="sm">
      <thead>
        <tr>
          <th>Talla</th>
          <th>Cantidad</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map(size => (
          <tr key={size.label}>
            <td>{size.label}</td>
            <td>{size.existence}</td>
            <td>
              <ButtonGroup>
                <Button
                  size="sm"
                  color="danger"
                  onClick={onDelete?.bind(null, size)}
                >
                  <i className="fa fa-close"></i>
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SizeTable;
