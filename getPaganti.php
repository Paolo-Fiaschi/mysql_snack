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
        SELECT paganti.name, paganti.lastname, paganti.address
        FROM paganti
    ";
    $results = $conn -> query($sql);
    if ($results -> num_rows < 1) {
        echo "no result";
        return;
    }
    $res = [];
    while ($row = $results -> fetch_assoc()) {
        $res [] = $row['name'] . " " . $row['lastname'] . " " . $row['address'];
    }
    $conn -> close();

    echo json_encode($res);
