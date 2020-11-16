<?php
    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM favmovies";
        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }

    function getSingleUser($conn, $id) {
        $query = "SELECT * FROM favmovies WHERE id=" . $id . ";";
        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo (json_encode($result));
    }