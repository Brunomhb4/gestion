import React from 'react';

interface Checker {
  id: string;
  name: string;
  email: string;
  soldTickets: number;
}

interface CheckersTableProps {
  checkers: Checker[];
  showActions?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const CheckersTable: React.FC<CheckersTableProps> = ({ 
  checkers, 
  showActions = false,
  onEdit,
  onDelete
}) => {
  return (
    <div className="card">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-navy-900">Checadores</h3>
      </div>
      
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Nombre</th>
              <th className="table-header-cell">Email</th>
              <th className="table-header-cell">Tickets Vendidos</th>
              {showActions && <th className="table-header-cell">Acciones</th>}
            </tr>
          </thead>
          <tbody className="table-body">
            {checkers.map((checker) => (
              <tr key={checker.id} className="hover:bg-blue-50 transition-colors">
                <td className="table-body-cell font-medium text-navy-900">{checker.name}</td>
                <td className="table-body-cell text-sage-700">{checker.email}</td>
                <td className="table-body-cell">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-800">
                    {checker.soldTickets}
                  </span>
                </td>
                {showActions && (
                  <td className="table-body-cell">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => onEdit && onEdit(checker.id)}
                        className="text-navy-600 hover:text-navy-900 transition-colors"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => onDelete && onDelete(checker.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckersTable;