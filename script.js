document.addEventListener('DOMContentLoaded', () => {
     
    const data = { 
        "brand":{
            "name": "Quad Oujda",
            //"logo": "assets/quad_logo.png",
            "logo": "https://private-user-images.githubusercontent.com/82768399/338771838-b7f4c84c-7a6f-4771-963c-e2dac7a0729f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNDkzMDQsIm5iZiI6MTcxODE0OTAwNCwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzE4MzgtYjdmNGM4NGMtN2E2Zi00NzcxLTk2M2MtZTJkYWM3YTA3MjlmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjExVDIzMzY0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg4ZGUwM2U3YmM4NDRhOTk5NTFjOWQyMTNkOTE1NjVlNDY4NDlkNDliYmFhMDdkNjgwZGU3MTg2MTdmYjc3MzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cU9O31VPjqsZdxAGDi3KMNTDiA3f0qyxgBOGdfj7N5I"
        },
        "home_section":{
            "title": "Libérez Votre Esprit d'Aventure", 
            //"cover": "assets/quad_cover_1.jpg",
            "cover":"https://images.unsplash.com/photo-1489731254138-5401fb834d9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        "product_section":{
            "title": "Nos Quads",
            "desc": "Découvrez notre sélection de quads tout-terrain haut de gamme, prêts à vous emmener dans des aventures inoubliables dans la nature sauvage.",
            "products":[
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338773631-0a393b73-b9c9-43d0-bfec-b64867abf2a5.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA5NTQsIm5iZiI6MTcxODE1MDY1NCwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM2MzEtMGEzOTNiNzMtYjljOS00M2QwLWJmZWMtYjY0ODY3YWJmMmE1LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDQxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMxYjNmZGNkZmU5MzZiMDU1ZjFiNjJkYmVmYWJjYjkxYWUzZDM4YTc4Y2MxNGQxM2YwMjMzMzZkZmVlYzViYzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.z6iGL-Dit5vuR0Whj5g3OmR9JZoZFQRPfjCC84ZT8dU", 
                },
                {
                    "title": "Card 1",
                    "image":"https://private-user-images.githubusercontent.com/82768399/338773665-416cfce4-2e48-4ca0-b489-7109974cc2a0.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA5NTQsIm5iZiI6MTcxODE1MDY1NCwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM2NjUtNDE2Y2ZjZTQtMmU0OC00Y2EwLWI0ODktNzEwOTk3NGNjMmEwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDQxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA3OTY1NDFlMzc3ZTdlZjE5N2JlYmY3NWQ2NTU5ZWY5MTllNDcwZjFiODFkNzZiMzZkMzQzN2M0M2ViZTg3ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Da4rlXQTmveoJZO6MRB5gfz6ppLooio436OEntiPxkw"
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774253-b1489a02-16d1-447e-b379-85769ac396ee.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIzODEsIm5iZiI6MTcxODE1MjA4MSwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQyNTMtYjE0ODlhMDItMTZkMS00NDdlLWIzNzktODU3NjlhYzM5NmVlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjgwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZhNDFlMjZhZTRiYjkwOTRhYTAxNmFhZTBmNzY3MzAwMThmNGFkNDY2ZjZmNjVmZDI0MzM5NTVjZmE3N2UxNzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.RCNFeRvpyPDBeIbIHlOiOzLSSKQgFEYLmnW7lBzo2f0"
                },
                
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338773676-c0cb3c42-3e38-4ee0-b5a8-b3e561586ce6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTEyOTMsIm5iZiI6MTcxODE1MDk5MywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM2NzYtYzBjYjNjNDItM2UzOC00ZWUwLWI1YTgtYjNlNTYxNTg2Y2U2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDk1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjNGUwMGNlMzZmYmMxNTcxZjUwOWJkYzJhNjgzNGEwY2FlM2IzMjNjM2I3YTYyNmQ5NjA5MGZiN2U4OTZkMGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a1vE-HPSqWqZDi-9p7IBm6mJTWC1Xmr2VsK_GsZoAvw"
                },
                {
                    "title": "Card 1",
                    "image":"https://private-user-images.githubusercontent.com/82768399/338773689-898216a4-4127-4145-b061-c7eb68e32faf.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM2ODktODk4MjE2YTQtNDEyNy00MTQ1LWIwNjEtYzdlYjY4ZTMyZmFmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiZjRmOTljMDA5OTBkNzFmOGM5MmYyNDk3ODZlYWYxYjNmYWY3MDhmM2I4YTIxZDNlN2JjNDdkNmRmMDhkMTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9aG2HAvwVr9CgDAgqScUipb-hPPQUCdNBA73U-_Gvo8"
                 },
                 {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774136-ca001acc-b621-45bd-a6bd-da9964fb2a78.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIzODEsIm5iZiI6MTcxODE1MjA4MSwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxMzYtY2EwMDFhY2MtYjYyMS00NWJkLWE2YmQtZGE5OTY0ZmIyYTc4LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjgwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI5MmY5ZjNkY2RhY2Q3MWJiYTMyNTVmY2NkNDc2MzFlMmY3MGMxMGViNjU3NDBmNTdhN2Q5YzBiNDZjNjgzMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rtzV0TILn0rVV-YzVu35CAncidEN4g6hd5ibSlCy7kY", 
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774115-675fc152-c7ec-46a4-bbd2-f05d4529fb33.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxMTUtNjc1ZmMxNTItYzdlYy00NmE0LWJiZDItZjA1ZDQ1MjlmYjMzLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwMDFkYmEyNmRlYTFlMTE0YzRlYThjZWYzMzc4ODMzMWYyZmM4ZTExNjg4YTM3N2VlOTJmZmQ5Y2I5Yjk0ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gy0y_wRm3PGVHDAN5w2qyStktk6RVTXvU2QwB_Gz3Sk"
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338773696-700d2b2d-9f18-4e01-a0df-d8df0816433a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM2OTYtNzAwZDJiMmQtOWYxOC00ZTAxLWEwZGYtZDhkZjA4MTY0MzNhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM0NTM2NWYyMmY0MjI3ZTE3MzFhM2YzOGJhMTQwNWQ1NzRiOGJjNWU4YTlmMTE1NjBjYzhmNmJlZDVjZmRmNWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-nqCMnrtSNM7qb9J4z7hf-fg6bIvdG1U9HY276jd46g" 
                },
                {
                    "title": "Card 1",
                    "image":"https://private-user-images.githubusercontent.com/82768399/338774102-ad75c7bd-c0dc-422a-a460-2a19206f2847.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxMDItYWQ3NWM3YmQtYzBkYy00MjJhLWE0NjAtMmExOTIwNmYyODQ3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAwOTMxN2Q0NGRlZmE3NTI4OWUyOWU2MDg2NTcwNGE4M2UxYzFjOWFiMDhiNTRmOGJkNDk4ZTFlY2EyZmQzMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dRy3ZnrgPALa4f9aDUJNaZXzrbwWnTUdQgIl18XQePU"
                },
                {
                    "title": "Card 1",
                    "image":  "https://private-user-images.githubusercontent.com/82768399/338774124-1b2fe2ab-ff6d-4ca5-8b76-23ae49542eb9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxMjQtMWIyZmUyYWItZmY2ZC00Y2E1LThiNzYtMjNhZTQ5NTQyZWI5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM5MDljMjFkNDhjOWMxZGM4ZjU2ZjQxZTQ0YjcxZjRkNTlmNTM1ZTI3OTFkNzRmYTQxZmZlNjMwOTFkM2ZmODEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.IfgoySnHQKlDA-11DCVYPX4AZYaSJiGVrpQWONVZN0s"   },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338773907-cb011462-0f8f-4eca-9f59-9d9f67e44188.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTIwNTYsIm5iZiI6MTcxODE1MTc1NiwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM5MDctY2IwMTE0NjItMGY4Zi00ZWNhLTlmNTktOWQ5ZjY3ZTQ0MTg4LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMjIzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjYzdlMmM0NDUxYTFiOTliNzFlN2Y0Y2Q0MTAzMjUzYjZhMjg5NzI5NGExMWIyZDk4NzY3Y2QyYWE0MWZiNTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.07vUSmgBxxbqzuxukBrvl35gmM3tDTcbds4Z0DqI0dU"
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338773425-45a1f3e5-c3de-45fc-b858-a9fefda4ce6d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA5NTQsIm5iZiI6MTcxODE1MDY1NCwicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzM0MjUtNDVhMWYzZTUtYzNkZS00NWZjLWI4NTgtYTlmZWZkYTRjZTZkLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDQxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwNzRmNmE0OWRiNjczNGU0ODBhMTFjMzQzNWVmMTZmZjQ0ZDc4MmVjNDc1ZWNkMzU4MDI3ZjgyMjUyNTZkOTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ukZu1jAqSr6Vaftn0fKUItavQwFcmG84dfA6O34VrNk", 
                },
            ]
        }, 
        "memory_section":{
            "title": "Aventures en Quad",
            "desc": "Vivez une aventure épique en quad avec tes meilleurs amis.",
            "memories":[
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774148-96554ab6-b2b1-4001-bf30-71c7011522fd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxNDgtOTY1NTRhYjYtYjJiMS00MDAxLWJmMzAtNzFjNzAxMTUyMmZkLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIzYmNhNzBjZDk2ZDdmZDBkZjQwM2IyY2FjMmM5YmQ4ZTdiNmU4N2JiMjUzNTc2NWViNjk2MTQ1YjQzZGRlZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2ex4p2pFCJ_AgaPz2sryIZP_B1pcYeHlQoYMMpId7ok", 
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774167-f4830fe0-3ff3-4703-b240-606186873b8a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxNjctZjQ4MzBmZTAtM2ZmMy00NzAzLWIyNDAtNjA2MTg2ODczYjhhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVkZTg3YTExNGIxNDIyMTJkYjIxODQwNzRjMmFlYzlmMjFiZWI0NmU3MjViMTIyZGRlMjdjNzI5Y2QzYjZmMjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.GheC7F322oYszEbfWvPt8WZ-_5-7q-koPBZTpcyt7vw", 
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774189-d3ceef86-2796-44ca-977e-208880cf050f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQxODktZDNjZWVmODYtMjc5Ni00NGNhLTk3N2UtMjA4ODgwY2YwNTBmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkxNzAxNWZmNTNlZGFhYWE4YzA0ZGFmOGI2ZDQ2NDdlMTBiYTIyYzJlZWRmNDI5MGI5NDk4YzY5YTczZGJjMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.kuZd6eaNpHD8WRkOg0um5Aj5BYpETLvb2LD7M9YmzSE", 
                }, 
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774203-60f4340d-c9c0-4501-af93-dcfaa3de07f7.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQyMDMtNjBmNDM0MGQtYzljMC00NTAxLWFmOTMtZGNmYWEzZGUwN2Y3LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlNGI3Y2M0ZGJiMDI5MjI1NmQ0MDZlNmExMGI2Y2FlN2U5ZGI1ZjE4ZjJhMGU3ZTY0MjZiZjVjMmU3OGFjMGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pbDrEbb004hUrumIdHc3lwtD6RrFAgAf4N3stDs5ojE", 
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774220-a07bc025-d677-4c15-9630-fb4c2f9e67c9.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQyMjAtYTA3YmMwMjUtZDY3Ny00YzE1LTk2MzAtZmI0YzJmOWU2N2M5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJmOWY3NjdhYTUwYWQ4NjUxNTU5NzQ1MDhmMDc4ZDIyZmFiYmZmYWFlMDU3ZGQ5YTU2ODlmZjcyOGU0NTNjOWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5r19a0XCyyJ7gR_88gB5-9SQaogk6gBvdIYtbs4Xy_A", 
                },
                {
                    "title": "Card 1",
                    "image": "https://private-user-images.githubusercontent.com/82768399/338774231-ed86686a-36aa-48dd-b4bc-033fcf96c2e5.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgxNTA3MjMsIm5iZiI6MTcxODE1MDQyMywicGF0aCI6Ii84Mjc2ODM5OS8zMzg3NzQyMzEtZWQ4NjY4NmEtMzZhYS00OGRkLWI0YmMtMDMzZmNmOTZjMmU1LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjEyVDAwMDAyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM5OGY0MzdlMWE2MmUxNGZiOWY3OWEyMWFmOTMwYjJkMWM2YTg2ZGVhODMzY2NmMWE5NmYxNzM0MzFiZjY2MWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.wND8h0ZoPasGowc7y74S8zmaX5RLErzP4dJ6SxIS6a0", 
                }, 
            ]
        }, 
        "about_section":{
            "title": "À Propos de Nous",
            "desc": "Bienvenue chez Quad Aventure! Nous sommes passionnés par l'aventure et dédiés à offrir des expériences inoubliables à nos clients. Que vous soyez un novice à la recherche de sensations fortes ou un expert du tout-terrain, nos quads de haute qualité et notre service exceptionnel vous garantiront une journée remplie d'excitation et de découvertes. Rejoignez-nous pour explorer des paysages époustouflants et créer des souvenirs impérissables. La sécurité, le plaisir et l'aventure sont au cœur de notre mission. Venez vivre l'aventure avec Quad Aventure!",
        },
        "location_section":{
            "title": "Notre Emplacement",
            "desc": "Retrouvez-nous au cœur de paysages naturels époustouflants. Utilisez notre carte interactive pour nous localiser facilement et planifier votre aventure en quad.",
            "mapUrl" :"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3278.689045027259!2d-1.8716502242538793!3d34.738231672906416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ0JzE3LjYiTiAxwrA1MicwOC43Ilc!5e0!3m2!1sfr!2sma!4v1717499931975!5m2!1sfr!2sma" ,
        },
        "contact_section":{
            "title": "Contactez-Nous",
            "desc": "Nous sommes ici pour répondre à toutes vos questions. Contactez-nous pour plus d'informations sur nos services de location de quads.",
            "contacts":[
                {
                    "name": "Facebook", 
                    "link": "https://www.facebook.com/Cristiano/",
                    "class":"sc-facebook",
                    "icon":"fab fa-facebook-f"
                },
                {
                    "name": "Instagram",
                    "link": "https://www.instagram.com/quad.oujda/",
                    "class":"sc-instagram",
                    "icon":"fab fa-instagram"
                },
                {
                    "name": "snapchat", 
                    "link": "https://snapchat.com/t/kEshJ02i",
                    "class":"sc-snapshat",
                    "icon":"fab fa-snapchat-ghost"
                },
                {
                    "name": "gmail",
                    "link": "mailto:quadoujda@gmail.com",
                    "class":"sc-gmail",
                    "icon":"fas fa-envelope"
                },
                 {
                    "name": "tiktok",
                    "link": "https://www.tiktok.com/@quad.oujda",
                    "class":"sc-tiktok",
                    "icon":"fab fa-tiktok"
                },
                {
                    "name": "whatsapp",
                    "link": "https://wa.me/+212627272318?text=Hello%20there!",
                    "class":"sc-whatsapp",
                    "icon":"fab fa-whatsapp"
                }
            ]
        },  
    };

    //-------------------------------------------------------------------------------------------------//

    // Home Section
    document.querySelector('.logo').src = data.brand.logo; 
    // document.getElementById('home').style.backgroundImage =`url(${data.home_section.cover})`;
    document.getElementById('home_img').src =data.home_section.cover; 
    document.getElementById('home-section-title').textContent = data.home_section.title;

    //-------------------------------------------------------------------------------------------------//

    // Product Section
    document.getElementById('product-section-title').textContent = data.product_section.title;
    document.getElementById('product-section-desc').textContent = data.product_section.desc;

    const productsGrid = document.getElementById('grid-container');
    data.product_section.products.forEach(pr => {
        const card = document.createElement('img');
        card.classList.add('product-card');
        card.src = pr.image;
        card.alt = "Quad" ;
        card.loading = "lazy" ;
        productsGrid.appendChild(card);
    });
     
    //-------------------------------------------------------------------------------------------------//
    
    // Memory Section
    document.getElementById('memory-section-title').textContent = data.memory_section.title;
    document.getElementById('memory-section-desc').textContent = data.memory_section.desc;

    const memoriesGrid = document.getElementById('memory-grid');
    data.memory_section.memories.forEach(pr => {
        const card = document.createElement('img');
        card.classList.add('product-card');
        card.src = pr.image;
        card.alt = "Quad" ;
        card.loading = "lazy" ;  
        memoriesGrid.appendChild(card);
    });
  
 //-------------------------------------------------------------------------------------------------//

    // About Section
    document.getElementById('about-section-title').textContent = data.about_section.title;
    document.getElementById('about-section-desc').textContent = data.about_section.desc;

    //-------------------------------------------------------------------------------------------------//

    // About Section
    document.getElementById('location-section-title').textContent = data.location_section.title;
    document.getElementById('location-section-desc').textContent = data.location_section.desc;
    document.getElementById('location-section-map').src = data.location_section.mapUrl;

    //-------------------------------------------------------------------------------------------------//

    // Contact Section
    document.getElementById('contact-section-title').textContent = data.contact_section.title;
    document.getElementById('contact-section-desc').textContent = data.contact_section.desc;

    const contactGrid = document.getElementById('contact-grid');
    data.contact_section.contacts.forEach(cn => {
        const card = document.createElement('a');
        card.classList.add('social-item');
        card.classList.add(cn.class);
        card.target ="_blank"  ;
        card.href=cn.link;
        card.innerHTML = `<i class="${cn.icon}"></i>`;
        contactGrid.appendChild(card);
    });

    //-------------------------------------------------------------------------------------------------//

    // Footer Section 
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-section-text').textContent = `© ${currentYear} ${data.brand.name}. All rights reserved.`;
     

     
});
