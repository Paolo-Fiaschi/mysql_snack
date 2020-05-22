<?php
    header('Content-Type: application/json');
    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'HotelDb';
    $conn = new mysqli($server, $username, $password, $dbName);
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
        return;
    }
    $sql = "
        SELECT paganti.name, paganti.lastname, pagamenti.price, paganti.created_at AS 'data'
        FROM prenotazioni
            JOIN pagamenti
                ON pagamenti.prenotazione_id = prenotazioni.id
            JOIN paganti
                ON pagamenti.pagante_id = paganti.id
        WHERE paganti.created_at >= '2018-05-01'
        AND paganti.created_at <= '2018-06'
    ";
    $results = $conn -> query($sql);
    if ($results -> num_rows < 1) {
        echo "no result";
        return;
    }
    $res = [];
    while ($row = $results -> fetch_assoc()) {
        $res [] = $row['name'] . " " 
                . $row['lastname'] . " " 
                . $row['price'] . " " 
                . $row['data'];
    }
    $conn -> close();

    echo json_encode($res);
