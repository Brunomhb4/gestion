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
    <div className="card floating-card">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-navy-900">Checadores</h3>
        <p className="text-sm text-sage-600 mt-1">Personal encargado de la venta de tickets</p>
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
            {checkers.map((checker, index) => (
              <tr 
                key={checker.id} 
                className="table-row animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="table-body-cell">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-navy-500 to-sage-500 flex items-center justify-center text-white font-semibold text-sm mr-4 shadow-sm">
                      {checker.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-navy-900">{checker.name}</span>
                  </div>
                </td>
                <td className="table-body-cell text-sage-700">{checker.email}</td>
                <td className="table-body-cell">
                  <span className="badge badge-secondary font-semibold">
                    {checker.soldTickets.toLocaleString()}
                  </span>
                </td>
                {showActions && (
                  <td className="table-body-cell">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => onEdit && onEdit(checker.id)}
                        className="text-navy-600 hover:text-navy-900 transition-colors font-medium"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => onDelete && onDelete(checker.id)}
                        className="text-red-600 hover:text-red-900 transition-colors font-medium"
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