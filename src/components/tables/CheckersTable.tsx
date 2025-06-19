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
      <div className="mb-8">
        <h3 className="text-2xl font-bold gradient-text mb-3">Checadores</h3>
        <p className="text-base text-sky-muted font-medium">Personal encargado de la venta de tickets</p>
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
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <td className="table-body-cell">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-midnight-blue to-sky-muted flex items-center justify-center text-white font-bold text-sm mr-5 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-110">
                      {checker.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-deep-navy text-base">{checker.name}</span>
                  </div>
                </td>
                <td className="table-body-cell text-sky-muted font-medium">{checker.email}</td>
                <td className="table-body-cell">
                  <span className="badge badge-secondary font-bold text-sm">
                    {checker.soldTickets.toLocaleString()}
                  </span>
                </td>
                {showActions && (
                  <td className="table-body-cell">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => onEdit && onEdit(checker.id)}
                        className="text-midnight-blue hover:text-deep-navy transition-colors font-semibold hover:scale-105"
                      >
                        Editar
                      </button>
                      <button 
                        onClick={() => onDelete && onDelete(checker.id)}
                        className="text-error-600 hover:text-error-900 transition-colors font-semibold hover:scale-105"
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