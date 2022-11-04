import React from "react";

const Table = (onSort, selectedSort, columns, data) => {
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data }} />
        </table>
    );
};

export default Table;
