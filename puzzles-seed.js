// Built-in puzzles (used when Firebase is empty / not configured). Admin can upload them to the database.
export const SEED = [
    {
        id: 1, date: "1990", white: "Viswanathan Anand", black: "Gary Quillan", result: "1-0", fen: "4k2r/p4q2/2nQp2p/B3P1p1/b3r3/P5P1/1RP2P2/5RK1 w - - 1 1", solution: ["Rb8+", "Nxb8", "Qd8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 2, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/4R3/2N3bB/4q3/2P2RB1/r3k1nN/p6K/b2Q3n w - - 0 1", solution: ["Rd4#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 3, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "rbb1k1nr/ppqn2pp/2p1p3/3p1pN1/2PP4/1PN1P3/P3BPPP/R1BQ1RK1 b kq - 0 1", solution: ["Qxh2#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 4, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/6R1/K1k2n2/3n1N2/N1P5/1p4B1/8/3R4 w - - 0 1", solution: ["Nd4#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 5, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "1r2R3/8/2p2k1p/p5p1/Pp1n4/6Pq/QP3P2/4R1K1 b - - 0 1", solution: ["Nf3#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 6, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/8/2K2N1p/5k2/8/2B5/4Q3/8 w - - 0 1", solution: ["Qg4#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 7, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "2r2rk1/p4pp1/1p3n1p/4pN2/4P3/2q1P3/n1PRQ1PP/3K1R2 b - - 0 1", solution: ["Qa1#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 8, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "6K1/4b2Q/3R4/B1p5/b2P2P1/2p1p3/2N5/1RNk4 w - - 0 1", solution: ["Qd3#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 9, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "5N2/1P5B/2n1P2R/1bP1k1K1/2n1Pp2/2pr4/Q3R3/4N1B1 w - - 0 1", solution: ["Nxd3#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 10, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "2B5/2p5/Q1Rp4/3RpN2/5pp1/5k2/8/3K4 w - - 0 1", solution: ["Qe2#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 11, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/8/2K2Nk1/5N1p/8/2B5/4Q3/8 w - - 0 1", solution: ["Qxh5#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 12, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/7B/8/B7/K7/8/p7/k7 w - - 0 1", solution: ["Bc3#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 13, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/4R3/2N3bB/4q3/2P1nRB1/r3k1nN/p6K/b2Q4 w - - 0 1", solution: ["Rf3#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 14, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "r2r4/p1qk3p/1p1bR3/2pQ4/8/3P2PB/PP3P1P/6K1 w - - 3 25", solution: ["Re1#"], alternatives: {
            "first_move": ["Re1#", "Re2#", "Re3#", "Re4#", "Re5#", "Re6#", "Re7#", "Re8#"]
        }, description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 15, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "6k1/pp3ppp/5n2/3p4/5qb1/2PBr2P/PPQK2P1/R6R b - - 1 21", solution: ["Re8#"], alternatives: {
            "first_move": ["Re8#", "Re5#", "Re6#", "Re7#", "Re4#",]
        }, description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 16, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "3r4/Bp3p1k/2pp4/P3bP2/2P5/1PN2brP/2R4K/5R2 b - - 2 33", solution: ["Rg4#"], alternatives: {
            "first_move": ["Rg4#", "Rg5#", "Rg6#", "Rg7#", "Rgg8#",]
        }, description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 17, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "r6r/ppp4Q/3qb3/3p4/3P2kP/5R2/P3B1P1/5RK1 w - - 7 29", solution: ["Ra3#"], alternatives: {
            "first_move": ["Ra3#", "Rb3#", "Rc3#", "Rd3#", "Re3#", "Rh3#",]
        }, description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 18, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "5rk1/5p1p/p1p3p1/3p2N1/5P2/q1bQ4/1rB3PP/2KR3R b - - 1 21", solution: ["Rbb8#"], alternatives: {
            "first_move": ["Rbb8#", "Rb3#", "Rb4#", "Rb5#", "Rb6#", "Rb7#",]
        }, description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 19, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "6k1/7p/3q2p1/1PpP1r2/6nP/1P1R4/3Q2P1/4R1K1 b - - 5 37", solution: ["Qh2#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 20, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "rqb5/kPR5/8/K7/8/8/8/8 w - - 0 1", solution: ["bxc8=N#",], description: "White moves and wins in 1.", category: "Mate in 1"
    },

    {
        id: 21, date: "1893", white: "Siegbert Tarrasch", black: "Max Kurschner", result: "1-0", fen: "r2qk2r/pb4pp/1n2Pb2/2B2Q2/p1p5/2P5/2B2PPP/RN2R1K1 w - - 1 1", solution: ["Qg6+", "hxg6", "Bxg6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 22, date: "1894", white: "James Mason", black: "Georg Marco", result: "0-1", fen: "6k1/pp4p1/2p5/2bp4/8/P5Pb/1P3rrP/2BRRN1K b - - 0 1", solution: ["Rg1+", "Kxg1", "Rxf1#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 23, date: "1949", white: "Enrico Paoli", black: "Jan Foltys", result: "0-1", fen: "8/2k2p2/2b3p1/P1p1Np2/1p3b2/1P1K4/5r2/R3R3 b - - 0 1", solution: ["Bb5+", "Nc4", "Rd2#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 24, date: "1929", white: "Siegbert Tarrasch", black: "Max Kurschner", result: "1-0", fen: "6k1/5p2/1p5p/p4Np1/5q2/Q6P/PPr5/3R3K w - - 1 1", solution: ["Qf8+", "Kxf8", "Rd8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 25, date: "1887", white: "Wilhelm Steinitz", black: "Albert Hodges", result: "1-0", fen: "r1b2k1r/ppppq3/5N1p/4P2Q/4PP2/1B6/PP5P/n2K2R1 w - - 1 1", solution: ["Qxh6+", "Rxh6", "Rg8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 26, date: "1865", white: "Johannes Zukertort", black: "Adolf Anderssen", result: "1-0", fen: "r1b2k1r/ppp1bppp/8/1B1Q4/5q2/2P5/PPP2PPP/R3R1K1 w - - 1 1", solution: ["Qd8+", "Bxd8", "Re8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 27, date: "1927", white: "Ilya Rabinovich", black: "Grigory Levenfish", result: "0-1", fen: "rn2kb1r/ppp1pppp/8/8/4q3/3P1N1b/PPP1BPnP/RNBQ1K1R b kq - 0 1", solution: ["Nh4+", "Ke1", "Nxf3#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 28, date: "1992", white: "Cristina Iosif", black: "Almira Skripchenko", result: "0-1", fen: "4r1k1/pQ3pp1/7p/4q3/4r3/P7/1P2nPPP/2BR1R1K b - - 0 1", solution: ["Qxh2+", "Kxh2", "Rh4#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 29, date: "1939", white: "Isaías Pleci", black: "Lucius Endzelins", result: "1-0", fen: "r4R2/1b2n1pp/p2Np1k1/1pn5/4pP1P/8/PPP1B1P1/2K4R w - - 1 1", solution: ["h5+", "Kh6", "Nf7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 30, date: "1927", white: "Monterinas", black: "Max Euwe", result: "0-1", fen: "7r/p3ppk1/3p4/2p1P1Kp/2Pb4/3P1QPq/PP5P/R6R b - - 0 1", solution: ["Be3+", "Qxe3", "Qg4#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 31, date: "1939", white: "Alexander Alekhine", black: "Fahardo Montevideo", result: "1-0", fen: "4r3/pbpn2n1/1p1prp1k/8/2PP2PB/P5N1/2B2R1P/R5K1 w - - 1 1", solution: ["Rxf6+", "Nxf6", "g5#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 32, date: "1858", white: "Paul Morphy", black: "Duke Karl", result: "1-0", fen: "4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 1", solution: ["Qb8+", "Nxb8", "Rd8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 33, date: "1957", white: "Robert Thacker", black: "Bobby Fischer", result: "0-1", fen: "2r2r2/6kp/3p4/3P4/4Pp2/5P1P/PP1pq1P1/4R2K b - - 0 1", solution: ["dxe1=N", "Kg1", "Qxg2#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 34, date: "1900", white: "Albert Pulitzer", black: "Georg Marco", result: "1-0", fen: "r2k2nr/pp1b1Q1p/2n4b/3N4/3q4/3P4/PPP3PP/4RR1K w - - 0 1", solution: ["Re8+", "Bxe8", "Qc7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 35, date: "1990", white: "Nona Gaprindashvili", black: "Eliška Richtrová", result: "1-0", fen: "1r3rk1/1pnnq1bR/p1pp2B1/P2P1p2/1PP1pP2/2B3P1/5PK1/2Q4R w - - 0 1", solution: ["Rh8+", "Bxh8", "Rxh8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 36, date: "1959", white: "Mikhail Tal", black: "Pal Benko", result: "1-0", fen: "1r3k2/2n1p1b1/3p2QR/p1pq1pN1/bp6/7P/2P2PP1/4RBK1 w - - 0 1", solution: ["Rh8+", "Bxh8", "Nh7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 37, date: "1908", white: "Jacques Schwarz", black: "Svyatoslav Samsonov", result: "1-0", fen: "r2q1k1r/ppp1bB1p/2np4/6N1/3PP1bP/8/PPP5/RNB2RK1 w - - 0 1", solution: ["Ne6+", "Bxe6", "Bh6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 38, date: "1887", white: "Wilhelm Steinitz", black: "Herbert Trenchard", result: "1-0", fen: "r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 0 1", solution: ["Ne7", "Nxf5", "Qg6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 39, date: "1887", white: "Wilhelm Steinitz", black: "David Sands", result: "1-0", fen: "r4br1/3b1kpp/1q1P4/1pp1RP1N/p7/6Q1/PPB3PP/2KR4 w - - 0 1", solution: ["Qg6+", "hxg6", "fxg6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 40, date: "?", white: "Boikhutso Mudongo", black: "Karolina Olsarova", result: "0-1", fen: "4r1k1/5ppp/pp6/2pp4/3b2bq/BQN5/PPP2PPP/5RK1 b - - 0 1", solution: ["Qxf2+", "Rxf2", "Re1#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 41, date: "2014", white: "Jo-Kai Liao", black: "Colm Daly", result: "0-1", fen: "4k2r/1q1p1pp1/p3p3/1pb1P3/2r3P1/P1N1P2p/1PP1Q2P/2R1R1K1 b k - 0 1", solution: ["Bxe3+", "Qxe3", "Qg2#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 42, date: "1999", white: "Ashot Anastasian", black: "Sergei Tiviakov", result: "1-0", fen: "3rr2k/4N2p/5qpQ/1p3N2/p5P1/4R3/P4P1K/8 w - - 1 1", solution: ["Qxh7+", "Kxh7", "Rh3+", "Qh4", "Rxh4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 43, date: "1970", white: "Tigran Petrosian", black: "Dragoslav Tomic", result: "1-0", fen: "Q7/2r2rpk/7p/7N/3PpN2/1p2P3/1K4R1/5q2 w - - 0 1", solution: ["Rxg7+", "Rxg7", "Nf6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 44, date: "1876", white: "Joseph Blackburne", black: "William Martin", result: "1-0", fen: "1r1kr3/Nbppn1pp/1b6/8/6Q1/3B1P2/Pq3P1P/2BRR1K1 w - - 0 1", solution: ["Qxd7+", "Kxd7", "Bf5#",], alternatives: {
            "Qxd7+": ["Bf5#", "Bb5#"]
        }, description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 45, date: "1997", white: "Gregor Podkriznik", black: "Mohamed Gassouma", result: "1-0", fen: "1r6/4b2k/1q1pNrpp/p2Pp3/4P3/1P1R3Q/5PPP/5RK1 w - - 0 1", solution: ["Qxh6+", "Kxh6", "Rh3#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 46, date: "1930", white: "Dawid Przepiorka", black: "Erich Eliskases", result: "0-1", fen: "2r3k1/p4p2/3Rp2p/1p2P1pK/8/1P4P1/P3Q2P/1q6 b - - 0 1", solution: ["Qg6+", "Kg4", "Qf5+", "Kh5", "Qh3#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 47, date: "1930", white: "Roberto Grau", black: "Edgar Colle", result: "1-0", fen: "1k5r/pP3ppp/3p2b1/1BN1n3/1Q2P3/P1B5/KP3P1P/7q w - - 1 1", solution: ["Na6+", "Kxb7", "Ba4+", "Kc8", "Qb8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 48, date: "1875", white: "Johannes Zukertort", black: "William Norwood Potter", result: "1-0", fen: "3r4/pR2N3/2pkb3/5p2/8/2B5/qP3PPP/4R1K1 w - - 1 1", solution: ["Be5+", "Kc5", "Rc1+", "Bc4", "b4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 49, date: "1946", white: "Ossip Bernstein", black: "Alexander Kotov", result: "1-0", fen: "R6R/1r3pp1/4p1kp/3pP3/1r2qPP1/7P/1P1Q3K/8 w - - 1 1", solution: ["f5+", "Qxf5", "Qxh6+", "gxh6", "Rag8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 50, date: "1937", white: "Paul Vaitonis", black: "Reuben Fine", result: "0-1", fen: "4r1k1/5bpp/2p5/3pr3/8/1B3pPq/PPR2P2/2R2QK1 b - - 0 1", solution: ["Re1", "Rxe1", "Rxe1", "Rc1", "Qg2#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 51, date: "1899", white: "Géza Maróczy", black: "Heinrich Wolf", result: "1-0", fen: "2r5/2p2k1p/pqp1RB2/2r5/PbQ2N2/1P3PP1/2P3P1/4R2K w - - 1 1", solution: ["Re7+", "Kxf6", "Qe6+", "Kg5", "Rg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 52, date: "1826", white: "William Evans", black: "Alexander MacDonnell", result: "1-0", fen: "r3k2r/ppp2Npp/1b5n/4p2b/2B1P2q/BQP2P2/P5PP/RN5K w kq - 1 1", solution: ["Bb5+", "c6", "Qe6+", "Qe7", "Qxe7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 53, date: "1846", white: "Benhard Horvitz", black: "Howard Staunton", result: "0-1", fen: "6k1/ppp2ppp/8/2n2K1P/2P2P1P/2Bpr3/PP4r1/4RR2 b - - 0 1", solution: ["g6+", "hxg6", "hxg6+", "Kf6", "Nd7#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 54, date: "1860", white: "Paul Journoud", black: "Jules Arnous", result: "1-0", fen: "r1bk3r/pppq1ppp/5n2/4N1N1/2Bp4/Bn6/P4PPP/4R1K1 w - - 0 1", solution: ["Nexf7+", "Qxf7", "Nxf7+", "Kd7", "Bb5+", "c6", "Re7#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 55, date: "1910", white: "Frederick Yates", black: "Aaron Nimzowitsch", result: "0-1", fen: "8/k2r4/p7/2b1Bp2/P3p3/qp4R1/4QP2/1K6 b - - 0 1", solution: ["Rd1+", "Qxd1", "Qa2+", "Kc1", "Ba3+", "Bb2", "Qxb2#"], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 56, date: "1943", white: "Paul Keres", black: "Arturo Pomar Salamanca", result: "1-0", fen: "7R/r1p1q1pp/3k4/1p1n1Q2/3N4/8/1PP2PPP/2B3K1 w - - 0 1", solution: ["Rd8+", "Qxd8", "Qe6+", "Kc5", "Nb3+", "Kc4", "Qe4#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 57, date: "1885", white: "Alexander Meek", black: "Paul Morphy", result: "0-1", fen: "Q7/p1p1q1pk/3p2rp/4n3/3bP3/7b/PP3PPK/R1B2R2 b - - 0 1", solution: ["Bxg2", "Qh8+", "Kxh8", "Bg5", "Qxg5", "Rfe1", "Nf3#"], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 58, date: "1994", white: "Veselin Topalov", black: "Garry Kasparov", result: "1-0", fen: "4k2r/1R3R2/p3p1pp/4b3/1BnNr3/8/P1P5/5K2 w - - 1 1", solution: ["Rfe7+", "Kd8", "Nc6+", "Kc8", "Na7+", "Kd8", "Rbd7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 59, date: "1964", white: "Viktor Korchnoi", black: "Andrejs Peterson", result: "1-0", fen: "r2r1n2/pp2bk2/2p1p2p/3q4/3PN1QP/2P3R1/P4PP1/5RK1 w - - 0 1", solution: ["Qg7+", "Ke8", "Qxe7+", "Kxe7", "Rg7+", "Ke8", "Nf6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 60, date: "2014", white: "Simen Agdestein", black: "Al Qudaimi", result: "1-0", fen: "3r1r2/1pp2p1k/p5pp/4P3/2nP3R/2P3QP/P1B1q1P1/5RK1 w - - 1 1", solution: ["Rxf7+", "Rxf7", "Qxg6+", "Kh8", "Rxh6+", "Rh7", "Qxh7#",], alternatives: {
            "Kh8": ["Rxh6+", "Rxh7#"], "Rh7": ["Rxh7#"], "Kh8": ["Qxh6+", "Rh7", "Qxh7#"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 61, date: "1998", white: "Alexander Zubarev", black: "Oscar Lemmers", result: "1-0", fen: "7k/5r1p/1p3Pn1/2p2p1N/2P2P2/7P/1Bb4K/4R3 w - - 1 1", solution: ["Re8+", "Nf8", "Rxf8+", "Rxf8", "f7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 62, date: "1905", white: "Augusts Gize", black: "Alexander Alekhine", result: "0-1", fen: "2k4r/ppp2p2/2b2B2/7p/6pP/2P1q1bP/PP3N2/R4QK1 b - - 0 1", solution: ["Bh2+", "Kxh2", "Qf4+", "Kg1", "Qg3+", "Qg2", "Qxg2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 63, date: "1959", white: "Paul Keres", black: "Tigran Petrosian", result: "0-1", fen: "6kr/3b4/1p1p4/p1n2p2/1PPNpP1q/P3Q1p1/1R1RB1P1/5K2 b - - 0 1", solution: ["Qxf4+", "Bf3", "Qxe3", "Bh5", "Rxh5", "Nf3", "Rh1+", "Ng1", "Rxg1#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 64, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/5K2/8/7p/k7/2B5/1P6/8 w - - 0 1", solution: ["Ke6", "h4", "Kd5", "h3", "Kc4", "h2", "Bb4", "h1=Q", "b3#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 65, date: "2003", white: "Magnus Carlsen", black: "Hans Harestad", result: "1-0", fen: "r7/3bb1kp/q4p1N/1pnPp1np/2p4Q/2P5/1PB3P1/2B2RK1 w - - 0 1", solution: ["Qxg5+", "fxg5", "Rf7+", "Kh8", "Rxh7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 66, date: "2002", white: "Magnus Carlsen", black: "Victor Hansen", result: "1-0", fen: "2rnqb2/1b1n1Nk1/p2PB1Pp/1p6/4Q3/8/PP4PP/R4RK1 w - - 1 1", solution: ["Qd4+", "Ne5", "Qxe5+", "Kxg6", "Qg3+", "Kh7", "Bf5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 67, date: "2003", white: "Magnus Carlsen", black: "Kristian Trygstad", result: "1-0", fen: "8/8/p2Q3p/6k1/2B2p2/P4K2/1q5P/8 w - - 0 1", solution: ["h4+", "Kh5", "Bf7+", "Kxh4", "Qxh6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 68, date: "2003", white: "Jon Hammer", black: "Magnus Carlsen", result: "0-1", fen: "5rk1/ppp2pbp/3p2p1/1q6/4r1P1/1NP1B3/PP2nPP1/R2QR2K b - - 0 1", solution: ["Qh5+", "gxh5", "Rh4#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 69, date: "2003", white: "Magnus Carlsen", black: "Helgi Gretarsson", result: "1-0", fen: "r5q1/pp1b1kr1/2p2p2/2Q5/2PpB3/1P4NP/P4P2/4RK2 w - - 0 1", solution: ["Bg6+", "Rxg6", "Qe7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 70, date: "1986", white: "Pazos Gambarrotti", black: "Viswanathan Anand", result: "0-1", fen: "6k1/5p2/6p1/3Q4/3P1K1P/5P2/1P2r1q1/R7 b - - 0 1", solution: ["Qh2+", "Kg5", "Qg3+", "Kh6", "Qxh4+", "Qh5", "Qxh5#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 71, date: "1987", white: "Viswanathan Anand", black: "Praveen Thipsay", result: "1-0", fen: "8/8/8/2Q5/8/3K4/1k6/q7 w - - 0 1", solution: ["Qb4+", "Ka2", "Kc2", "Qd1+", "Kxd1", "Ka1", "Kc2", "Ka2", "Qa5#",], alternatives: {
            "Ka2": ["Qa4#",], "Kc2": ["Qb2#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 72, date: "1988", white: "Viswanathan Anand", black: "Suhakar Babu", result: "1-0", fen: "3rrk2/1p1qppb1/3p2Q1/pN2n3/P2NP3/1PP4R/6PP/5R1K w - - 1 1", solution: ["Rxf7+", "Nxf7", "Rh7", "Qg4", "Ne6+", "Kg8", "Rxg7+", "Kh8", "Qh7#",], alternatives: {
            "Kh8": ["Rh7#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 73, date: "1989", white: "Viswanathan Anand", black: "Fernie Donguines", result: "1-0", fen: "3r4/3P2bp/3Rp1p1/1p2Pp2/1Pk1r3/3N4/1KP1R2P/8 w - - 1 1", solution: ["Rxe4+", "fxe4", "c3", "Rxd7", "Rxd7", "exd3", "Rd4#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 74, date: "1990", white: "Viswanathan Anand", black: "Ivan Morovic Fernandez", result: "1-0", fen: "4rr1k/2P4p/1p2Qp1P/3P2p1/2b5/8/5PP1/6K1 w - - 1 1", solution: ["c8=Q", "Rxc8", "Qe7", "Rf7", "Qxf7", "Rg8", "Qxf6+", "Rg7", "Qxg7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 75, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/8/8/6B1/6p1/4QPk1/8/7K w - - 0 1", solution: ["f4#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 76, date: "1991", white: "Alexander Beliavsky", black: "Viswanathan Anand", result: "0-1", fen: "5rk1/p1q2p1N/1p4p1/3bP2P/5Q2/2r1n3/P3B1P1/1K1R3R b - - 0 1", solution: ["Rb3+", "axb3", "Qc2+", "Ka1", "Qc3+", "Kb1", "Qxb3+", "Ka1", "Nc2#",], alternatives: {
            "Ka1": ["Qa2#",],
        }, description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 77, date: "1992", white: "Viswanathan Anand", black: "Lev Polugaevsky", result: "1-0", fen: "3b1r1k/1p4R1/2q1pr1p/1pPp3Q/1P3P2/P3P3/4KP1P/6R1 w - - 1 1", solution: ["R1g6", "Rxg6", "Qxg6", "d4", "Qxh6#",], alternatives: {
            "Qxg6": ["Rh7#",], "d4": ["Rh7#",], "Qxg6": ["Qh7#",],
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 78, date: "1993", white: "Viswanathan Anand", black: "Sonja Noll", result: "1-0", fen: "1q2r3/pp5k/1np3R1/4n2p/P6P/1QNBb3/1P3r2/1K4R1 w - - 1 1", solution: ["Rg7+", "Kh8", "Rh7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 79, date: "2018", white: "D Gukesh", black: "Jan Soural", result: "1-0", fen: "1rq1r3/1p2pbk1/p2pRp1n/P2P1Pp1/2PBB1P1/1P4K1/8/Q6R w - - 1 1", solution: ["Bxf6+", "exf6", "Qxf6+", "Kg8", "Rxh6", "b6", "Rh8#",], alternatives: {
            "b6": ["Qh8#",],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 80, date: "2018", white: "Kristaps Krustkalns", black: "D Gukesh", result: "0-1", fen: "5r1k/R3N1bp/3p4/Q4p2/3qpp2/8/1r3PPP/5RK1 b - - 0 1", solution: ["Qxf2+", "Rxf2", "Rb1+", "Qe1", "Rxe1+", "Rf1", "Bd4+", "Kh1", "Rxf1#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 81, date: "2018", white: "Alireza Firouzja", black: "Giga Kuparadze", result: "1-0", fen: "r3k1n1/1p4QR/p3q1p1/4pb2/4N3/2P2P2/PP3P2/2K5 w - - 1 1", solution: ["Nd6+", "Qxd6", "Qf7+", "Kd8", "Qxg8+", "Qf8", "Qxf8#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 82, date: "2019", white: "Mahdi Gholami Orimi", black: "Alireza Firouzja", result: "0-1", fen: "6k1/6n1/3q4/4p1N1/1R5Q/pP1b2PP/P4rBK/2r5 b - - 0 1", solution: ["Rxg2+", "Kxg2", "Bf1+", "Kg1", "Bc4+", "Kf2", "Qd2+", "Kf3", "Qe2#",], alternatives: {
            "Kg1": ["Bb5+",], "Kg1": ["Ba6+",],
        }, description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 83, date: "2019", white: "Alisher Suleymenov", black: "Alireza Firouzja", result: "0-1", fen: "8/6k1/7p/6rP/2P1Nr2/pP1B1n1b/P4R2/2R4K b - - 0 1", solution: ["Bg2+", "Rxg2", "Rh4+", "Rh2", "Rxh2#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 84, date: "2011", white: "Liren Ding", black: "Daniele Vocaturo", result: "1-0", fen: "3r1k2/pp2R2Q/3P2p1/2pb3n/6r1/8/PPB2K2/8 w - - 1 1", solution: ["Qh8+", "Bg8", "Qh6+", "Ng7", "Qxg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 85, date: "2011", white: "Liren Ding", black: "Zhonghan Ma", result: "1-0", fen: "6r1/r5PR/2p3R1/2Pk1n2/3p4/1P1NP3/4K3/8 w - - 1 1", solution: ["e4+", "Kxe4", "Re6+", "Kd5", "Re5#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 86, date: "2011", white: "Krikor Mekhitarian", black: "Liren Ding", result: "0-1", fen: "5bk1/1r4r1/3p4/1NpPp1q1/2P1P3/5p2/PR1Qb1P1/1R3BK1 b - - 0 1", solution: ["Qxg2+", "Bxg2", "Rxg2+", "Kh1", "Rh7+", "Qh6", "Rxh6#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 87, date: "2011", white: "Shilong Li", black: "Liren Ding", result: "0-1", fen: "6k1/5p2/5Ppq/2pP4/1pNbP1K1/5QP1/8/8 b - - 0 1", solution: ["Qh5+", "Kf4", "g5+", "Kf5", "Qxf3+", "Kxg5", "Bxf6+", "Kh6", "Qh1#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 88, date: "2014", white: "R S Kalugampitiya", black: "Liren Ding", result: "0-1", fen: "2B2r1k/bp4p1/pq1p3p/7Q/P3P3/2Pn4/1P1N2PP/R4R1K b - - 0 1", solution: ["Qg1+", "Rxg1", "Nf2#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 89, date: "2017", white: "Jinshi Bai", black: "Liren Ding", result: "0-1", fen: "7r/pQ2bN1k/2n3b1/6B1/2P1n1K1/4P2P/P4rP1/5B1R b - - 0 1", solution: ["Ne5+", "Nxe5", "Bf5+", "Kh5", "Kg7+", "Bh6+", "Rxh6#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 90, date: "2018", white: "Liren Ding", black: "Gujrathi Vidit", result: "1-0", fen: "r3n1k1/3b1p1p/1q3BpQ/2p5/P3N3/1P3P2/6PP/5R1K w - - 1 1", solution: ["Be7", "Nf6", "Bxf6", "Qxf6", "Nxf6+", "Kh8", "Qxh7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 91, date: "2015", white: "R Praggnanandhaa", black: "Raunak Sadhwani", result: "1-0", fen: "rnQ4N/1p4pp/p4q2/k2p4/2n2B2/8/P1P2PPP/1R4K1 w - - 1 1", solution: ["Qc5+", "b5", "Bc7+", "Nb6", "Qb4#",], alternatives: {
            "Nb6": ["Qa3#",],
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 92, date: "2017", white: "Sarin Nihal", black: "Nikolay Konovalov", result: "1-0", fen: "5k2/3n1p2/8/2p2N1p/2q5/P3Q2P/6PK/b7 w - - 1 1", solution: ["Qe7+", "Kg8", "Qg5+", "Kh7", "Qh6+", "Kg8", "Ne7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 93, date: "1956", white: "Donald Byrne", black: "Bobby Fischer", result: "0-1", fen: "1Q6/5pk1/2p3p1/1p2N2p/1b5P/1b4n1/r5P1/2K5 b - - 0 1", solution: ["Ne2+", "Kb1", "Nc3+", "Kc1", "Rc2#",], alternatives: {
            "Kc1": ["Ba3#",],
        }, description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 94, date: "1957", white: "Bobby Fischer", black: "Tibor Weinberger", result: "1-0", fen: "5r2/2Q4p/3P2p1/1k3p2/qp5P/2r2P2/2P3P1/1K1RR3 w - - 1 1", solution: ["Qb7+", "Ka5", "Re5+", "Rc5", "Qa7+", "Kb5", "Rxc5#",], alternatives: {
            "Ka5": ["Rd5+",]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 95, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "r3r2k/1R6/8/8/4N3/6P1/p4PK1/8 w - - 0 1", solution: ["Nf6", "Ra7", "Rxa7", "Re7", "Rxe7", "a1=Q", "Rh7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 96, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "8/4pkPp/7B/3K4/8/8/8/8 w - - 0 1", solution: ["g8=Q+", "Kxg8", "Ke6", "Kh8", "Kf7", "e5", "Bg7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 97, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "4r2k/pppb2pp/8/3Q2N1/1P1P1P2/P5K1/1B3PPP/n2q4 w - - 0 1", solution: ["Nf7+", "Kg8", "Nh6+", "Kh8", "Qg8+", "Rxg8", "Nf7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 98, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "1rr3k1/3R1p1p/4P1p1/6P1/p7/P7/K7/B3R3 w - - 0 1", solution: ["exf7+", "Kf8", "Re8+", "Rxe8", "Bg7+", "Kxg7", "fxe8=Q#",], alternatives: { "Kxg7": ["fxe8=R#"] }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 99, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "4Q3/8/5K1k/8/8/8/8/1q6 w - - 0 1", solution: ["Qe3+", "Kh7", "Qe7+", "Kh6", "Qg7+", "Kh5", "Qg5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 100, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "4R3/5ppk/7p/3BpP2/3b4/1P4QP/r5PK/4q3 w - - 0 1", solution: ["Qg6+", "fxg6", "Bg8+", "Kh8", "Bf7+", "Kh7", "Bxg6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 101, date: "2025", white: "Unknown", black: "Dhananjay Patil", result: "0-1", fen: "r1b3k1/1p4pp/1bp1p3/p2p1n2/PP3r1q/2P2B2/3N1PPP/R2Q1RK1 b - - 0 1", solution: ["Qxh2+", "Kxh2", "Rh4+", "Kg1", "Ng3", "bxa5", "Rh1#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 102, date: "2025", white: "Dhananjay Patil", black: "Unknown", result: "1-0", fen: "3rq3/R7/3Pbk1r/3Q1ppp/8/4P1P1/5PP1/6K1 w - - 0 1", solution: ["Qd4+", "Kg6", "Rg7#",], alternatives: {
            "Kg6": ["Qg7#"]
        }, description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 103, date: "2000", white: "Ian Nepomniachtchi", black: "Aggelos Sismanis", result: "1-0", fen: "2r2b1k/p2Q3p/b1n2PpP/2p5/3r1BN1/3q2P1/P4PB1/R3R1K1 w - - 0 1", solution: ["Qg7+", "Bxg7", "hxg7+", "Kg8", "Nh6#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 104, date: "2000", white: "Ian Nepomniachtchi", black: "Dmitry Andreikin", result: "1-0", fen: "rr3k2/4nN1n/p1bN2pp/q1P1Q3/4P2P/6P1/4P1B1/5RK1 w - - 0 1", solution: ["Qh8+", "Ng8", "Ne5+", "Ke7", "Rf7+", "Ke6", "Bh3#"], alternatives: {
            "Ke7": ["Qg7+", "Ke6"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 105, date: "2000", white: "Ian Nepomniachtchi", black: "Maxim Matlakov", result: "1-0", fen: "2rr1b1k/1bq5/p2p1NPp/5P2/2P1PpQ1/7R/6BP/7K w - - 0 1", solution: ["g7+", "Bxg7", "Qg6", "Bxf6", "Rxh6+", "Qh7", "Rxh7#"], alternatives: {
            "Qh7": ["Qxh7#"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 106, date: "2003", white: "Ian Nepomniachtchi", black: "Jonathan Dourerassou", result: "1-0", fen: "5kr1/pp4p1/3b1rb1/2Bp2NQ/1q6/8/PP3PPP/R3R1K1 w - - 0 1", solution: ["Nh7+", "Kf7", "Qxd5+", "Re6", "Qxe6#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 107, date: "2006", white: "Ian Nepomniachtchi", black: "Aleksandr Volodin", result: "1-0", fen: "2r1rk2/6b1/1q2ppP1/pp1PpQB1/8/PPP2BP1/6K1/7R w - - 0 1", solution: ["Qxf6+", "Bxf6", "Bxf6", "Qg1+", "Kxg1", "a4", "Rh8#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 108, date: "2007", white: "Harmen Jonkman", black: "Ian Nepomniachtchi", result: "0-1", fen: "8/5pk1/3bp2p/8/6KP/5Q2/7q/5B2 b - - 0 1", solution: ["h5+", "Kxh5", "Qe5+", "Kg4", "f5+", "Kg5", "f4+", "Kg4", "Qf5#"], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 109, date: "2009", white: "Maxim Rodshtein", black: "Ian Nepomniachtchi", result: "0-1", fen: "6r1/p6k/Bp3n1r/2pP1P2/P4q1P/2P2Q2/5K2/2R2R2 b - - 0 1", solution: ["Ne4+", "Ke2", "Qd2#"], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 110, date: "2009", white: "Ian Nepomniachtchi", black: "Boris Avrukh", result: "1-0", fen: "3qbr1k/pp1nNpp1/3p3p/n1r2NPQ/4P3/3Bp1R1/PPP4P/2KR4 w - - 0 1", solution: ["Nxh6", "Nb3+", "axb3", "Rxc2+", "Bxc2", "g6", "Nxf7+", "Kg7", "Qxg6#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 111, date: "2009", white: "Ian Nepomniachtchi", black: "Zhou Jianchao", result: "1-0", fen: "3r1r1k/2R4p/1q2Bp2/1p2pN2/pb2P2P/1P4PK/P1Q5/8 w - - 0 1", solution: ["Rxh7+", "Kxh7", "Qe2", "Qxe6", "Qh5+", "Kg8", "Qg6+", "Kh8", "Qg7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 112, date: "2011", white: "Ian Nepomniachtchi", black: "Sergey Smagin", result: "1-0", fen: "2r2b2/pn2qN1p/6p1/3B3k/PpP1Np2/1P5b/1Q6/3R2K1 w - - 1 1", solution: ["Nf6+", "Qxf6", "Bf3+", "Bg4", "Qh2+", "Qh4", "Rd5+", "g5", "Rxg5#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 113, date: "2007", white: "Chan Wei-Xuan", black: "Wesley So", result: "0-1", fen: "8/6k1/3p1rp1/3Bp1p1/1pP1P1K1/4bPR1/P5Q1/4q3 b - - 0 1", solution: ["Rf4+", "Kxg5", "Bb6", "a3", "Bd8#"], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 114, date: "2010", white: "Wesley So", black: "Jan Emmanuel Garcia", result: "1-0", fen: "q7/4R2p/p5pk/2QR4/P1p2r2/7P/2r3P1/6K1 w - - 0 1", solution: ["Rh5+", "gxh5", "Qd6+", "Kg5", "Qe5+", "Rf5", "Qg3+", "Kh6", "Qg7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 115, date: "2013", white: "Wesley So", black: "Marcin Dziuba", result: "1-0", fen: "2r2k2/2P2pp1/4pN2/8/1P1R4/6P1/5P2/2q2BK1 w - - 1 1", solution: ["Rd8+", "Ke7", "Ng8#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 116, date: "2014", white: "Wesley So", black: "Elshan Moradiabadi", result: "1-0", fen: "1rbq1r1k/2p4n/ppn1p3/2Pp2R1/1P1P1P1p/P3P3/1BQ5/2K4R w - - 1 1", solution: ["Qxh7+", "Kxh7", "Rxh4#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 117, date: "2014", white: "Wesley So", black: "Conrad Holt", result: "1-0", fen: "6k1/6rp/p1R2Q2/8/1P4qP/P2p2P1/5P1K/8 w - - 1 1", solution: ["Qd8+", "Kf7", "Rf6#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 118, date: "2015", white: "Albert Hernandez", black: "Wesley So", result: "0-1", fen: "N1br4/pp2ppbp/4k1p1/2p5/2P5/3N2Q1/1qnKPPPP/5B1R b - - 1 1", solution: ["Bc3+", "Kd1", "Qb1#"], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 119, date: "2015", white: "Wesley So", black: "Kayden Troff", result: "1-0", fen: "8/R7/3n1kp1/4N2r/1P2P2p/4KN2/6PP/5b2 w - - 1 1", solution: ["Ng4+", "Ke6", "Nd4#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 120, date: "2019", white: "Wesley So", black: "Ameet Ghasi", result: "1-0", fen: "5k2/3R4/p2P2Bp/1p6/1P1p2N1/4n2P/4r1PK/8 w - - 1 1", solution: ["Rf7+", "Kg8", "Nf6+", "Kh8", "Rh7#"], alternatives: {
            "Kg8": ["Nxh6+"]
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 121, date: "1976", white: "Garry Kasparov", black: "Aldyn Guseinov", result: "1-0", fen: "3r1r2/4Qp2/1nqP2pk/p3p2p/1pB5/1P6/5RPP/5R1K w - - 0 1", solution: ["Rxf7", "Rxf7", "Rxf7", "Rh8", "h4", "Qxg2+", "Kxg2", "Nxc4", "Qg5#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 122, date: "1977", white: "Garry Kasparov", black: "Adrian Negulescu", result: "1-0", fen: "8/2r1q2p/7k/2pR1Q2/4p2p/1P2P3/5PP1/6K1 w - - 0 1", solution: ["Qg4", "Qe5", "Rxe5", "h3", "Rh5#"], alternatives: {
            "h3": ["Qg5#"]
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 123, date: "1981", white: "Garry Kasparov", black: "Zakharov", result: "1-0", fen: "5r1k/2q1r1p1/1npbBpQB/1p1p3P/p2P2R1/P4PP1/1PR2PK1/8 w - - 0 ", solution: ["Bxg7+", "Rxg7", "Qh6+", "Rh7", "Qxf8+", "Bxf8", "Rg8#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 124, date: "1982", white: "Garry Kasparov", black: "Elmar Magerramov", result: "1-0", fen: "3r1r1k/1p3p1p/p2p4/4n1NN/6bQ/1BPq4/P3p1PP/1R5K w - - 0 1", solution: ["Nxf7+", "Nxf7", "Qf6+", "Kg8", "Qg7#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 125, date: "1955", white: "Igor Glek", black: "Mikhail Tal", result: "0-1", fen: "6k1/pp5q/4p3/4P3/3rn1K1/PP2Q1P1/8/4R3 b - - 0 1", solution: ["Qf5+", "Kh4", "Nd2+", "Qxd4", "Nf3#"], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 126, date: "1956", white: "E Chukaev", black: "Mikhail Tal", result: "0-1", fen: "4r1k1/5pbp/3p2p1/1ppP4/pqP5/R4B2/1PQ3PP/1K6 b - - 0 1", solution: ["Re1+", "Bd1", "Rxd1+", "Ka2", "Qxa3+", "bxa3", "Ra1#"], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 127, date: "1973", white: "Mikhail Tal", black: "NN", result: "1-0", fen: "rn1q3r/pp2kppp/3Np3/2b1n3/3N2Q1/3B4/PP4PP/R1B2RK1 w - - 0 1", solution: ["Rxf7+", "Nxf7", "Qxe6+", "Kf8", "Qxf7#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 128, date: "1973", white: "E Chukaev", black: "Mikhail Tal", result: "1-0", fen: "5r1k/1p1b1p1p/p2ppb2/5P1B/1q6/1Pr3R1/2PQ2PP/5R1K w - - 0 1", solution: ["Qh6", "Rxg3", "Bg6", "Rxg6", "fxg6", "fxg6", "Qxf8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 129, date: "1974", white: "Mikhail Tal", black: "Anton Deze", result: "1-0", fen: "r2rn2k/7p/p2P2pP/q3p1Q1/1pB5/4bP2/PPP5/1K1R3R w - - 0 1", solution: ["Qe7", "Bxh6", "Rxh6", "Qxa2+", "Bxa2", "Ng7", "Rxh7+", "Kxh7", "Rh1#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 130, date: "1977", white: "Mikhail Tal", black: "Prschibyl", result: "1-0", fen: "r7/5pk1/2p4p/1p1p4/1qnP4/5QPP/2B1RP1K/8 w - - 0 1", solution: ["Qg4+", "Kf8", "Bh7", "Ne5", "Rxe5", "Qe1", "Qg8#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 131, date: "2009", white: "Fabiano Caruana", black: "Peter Vavrak", result: "1-0", fen: "R2r3r/2k1qp1p/1p2p1p1/1Pnp4/Q7/1p2B3/5PPP/2R3K1 w - - 0 1", solution: ["Qa7+", "Kd6", "Bf4+", "e5", "Qxb6+", "Kd7", "Qc6#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 132, date: "2012", white: "Fabiano Caruana", black: "Nils Grandelius", result: "1-0", fen: "1Q6/5pk1/4p2p/2PpP1Pp/6P1/6B1/5RKP/r3q3 w - - 1 1", solution: ["gxh6+", "Kh7", "Rxf7+", "Kg6", "Rg7+", "Kxh6", "Qh8#"], alternatives: {
            "Kg6": ["Qg8+", "Kxh6", "Rf6#"], "Kxh6": ["Qg8+", "Kxh6", "Qg7#"], "Kh7": ["Rxf7+", "Kg6", "Qg8+", "Kxh6", "Rh7#"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 133, date: "2014", white: "Fabiano Caruana", black: "Anish Giri", result: "1-0", fen: "1q2b1k1/5p1p/6p1/3Np2P/3pP3/Q2P1RP1/P1r2PK1/4bB2 w - - 1 1", solution: ["Nf6+", "Kg7", "h6+", "Kxh6", "Qf8+", "Kg5", "Rf5+", "gxf5", "Qg7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 134, date: "2014", white: "Fabiano Caruana", black: "Baadur Jobava", result: "1-0", fen: "r1bk3r/pp3pq1/2p1pN1p/8/2B3p1/5RP1/P1P1QPP1/6K1 w - - 1 1", solution: ["Qd2+", "Kc7", "Qf4+", "e5", "Qxe5+", "Kd8", "Qd6+", "Bd7", "Qxd7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 135, date: "2016", white: "Laurent Fressinet", black: "Fabiano Caruana", result: "0-1", fen: "1k4r1/1r6/Q3p3/3pq3/4n3/3N4/P1P4P/5R1K b - - 0 1", solution: ["Qxh2+", "Kxh2", "Rh7#"], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 136, date: "2016", white: "Fabiano Caruana", black: "Wesley So", result: "1-0", fen: "7k/5Bp1/2p2nP1/p3p1q1/P2bP3/5Q2/2P2P2/4BK2 w - - 1 1", solution: ["Qh3+", "Nh5", "Qc8+", "Qd8", "Qxd8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 137, date: "2017", white: "Yifan Hou", black: "Fabiano Caruana", result: "0-1", fen: "r1b1k2r/pp3p2/2P3p1/4b3/4p3/4N1q1/PP1QPRB1/R2N2K1 b kq - 0 1", solution: ["Rh1+", "Kxh1", "Qh2#"], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 138, date: "2018", white: "Hans Niemann", black: "Shelev Oberoi", result: "1-0", fen: "5r2/pp2k1b1/b6p/3Q4/4N1pN/3n2P1/P4PP1/6K1 w - - 1 1", solution: ["Ng6+", "Ke8", "Qe6+", "Kd8", "Qd6+", "Ke8", "Qe7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 139, date: "2019", white: "Hans Niemann", black: "Leonid Yudasin", result: "1-0", fen: "2R2bk1/5rpp/4Qn2/p2p4/1p1q1B2/6P1/PP3PKP/8 w - - 1 1", solution: ["Rxf8+", "Kxf8", "Bd6+", "Kg8", "Qc8+", "Ne8", "Qxe8+", "Rf8", "Qxf8#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 140, date: "2019", white: "Hans Niemann", black: "Sriram Krishnakumar", result: "1-0", fen: "r1bqr3/1ppk3p/3b2pB/p1P1Q3/1PBp4/3P4/P2N1PPP/R5K1 w - - 1 1", solution: ["Bb5+", "c6", "Qxd6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 141, date: "2019", white: "Andrew Hong", black: "Hans Niemann", result: "0-1", fen: "8/7R/p1k1p1p1/3nP3/Np1KN1P1/3Pn3/PP3q2/8 b - - 0 1", solution: ["Nc2+", "Kc4", "Qd4+", "Kb3", "Na1#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 142, date: "2020", white: "Hans Niemann", black: "Zoran Novoselski", result: "1-0", fen: "r1b1rn1k/1p3Qp1/p1q3Pp/3N4/2nP4/P2B4/1PP2P2/2KR3R w - - 1 1", solution: ["Rxh6+", "gxh6", "g7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 143, date: "2003", white: "Y Pratibha", black: "Humpy Koneru", result: "0-1", fen: "8/6k1/6p1/4p1K1/pPp1P1PP/3n1P2/6r1/R7 b - - 0 1", solution: ["Nf4", "h5", "Ne6+", "Kh4", "g5+", "Kh3", "Nf4#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 144, date: "2012", white: "Humpy Koneru", black: "Sopiko Khukhashvili", result: "1-0", fen: "8/8/p4Qpk/1p2P2p/1Pb5/q6P/5PP1/3R2K1 w - - 1 1", solution: ["Qf8+", "Kg5", "h4+", "Kxh4", "Qf4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 145, date: "2012", white: "Wenjun Ju", black: "Humpy Koneru", result: "0-1", fen: "6rk/1pp3rp/4Rp2/1p1P4/7n/P2Q3P/1P3R1K/2q2B2 b - - 0 1", solution: ["Qg5", "Bg2", "Qxg2+", "Rxg2", "Rxg2+", "Kh1", "Rg1+", "Kh2", "R8g2#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 146, date: "2013", white: "Humpy Koneru", black: "D. Wang", result: "1-0", fen: "r2b4/1p4pk/3P2R1/2p2rPn/q1B5/7P/PpQB1P2/1K1R4 w - - 1 1", solution: ["Rh6+", "gxh6", "Qxf5+", "Kh8", "Qf8+", "Kh7", "Qxh6#",], alternatives: {
            "Kh7": ["Qg8#"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 147, date: "2014", white: "Mariya Muzychuk", black: "Humpy Koneru", result: "0-1", fen: "rq3Bk1/1b1Q1ppp/p1p1p3/8/P1B1Pb2/2p2PnP/1PP3P1/R2R2K1 b - - 0 1", solution: ["Be3+", "Kh2", "Nf1+", "Kh1", "Qh2#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 148, date: "1995", white: "Vladimir Kramnik", black: "Jaan Ehlvest", result: "1-0", fen: "3k3r/p1rb1p2/5P1b/q1p3B1/1pp1Q3/6P1/PP3P1P/2KRR3 w - - 0 1", solution: ["Qa8+", "Rc8", "Rxd7+", "Kxd7", "Qd5+", "Kc7", "Re7+", "Kb8", "Qb7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 149, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "kbK5/pp6/1P4p1/6P1/5p2/5p2/5P2/R7 w - - 0 1", solution: ["Ra6", "bxa6", "b7#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 150, date: "2010", white: "Zhansaya Abdumalik", black: "Yuliya Dudysheva", result: "1-0", fen: "2r2rk1/1b3p2/1q2pPp1/3pP2B/pp2nP2/1N5Q/PPP4P/1KR3R1 w - - 1 1", solution: ["Bxg6", "Nc3+", "Ka1", "fxg6", "Rxg6+", "Kf7", "Qh7+", "Ke8", "Qe7#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 151, date: "2010", white: "Sevval Dogan", black: "Zhansaya Abdumalik", result: "0-1", fen: "6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1", solution: ["Qe5", "Kg1", "Rxg2+", "Kxg2", "Qg3+", "Kh1", "Qh2#"], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 152, date: "2015", white: "Zhansaya Abdumalik", black: "Gylfi Thorhallsson", result: "1-0", fen: "1rb1k2r/4bppp/p3p3/1pq1p1B1/4nP2/3Q1B2/PPP3PP/2KR3R w k - 1 1", solution: ["Qd8+", "Bxd8", "Rxd8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 153, date: "2018", white: "Dina Drozdova", black: "Zhansaya Abdumalik", result: "0-1", fen: "b5k1/8/p6p/2p2Np1/3b1pP1/1P1N1q1P/P3rP1K/3R1Q2 b - - 0 1", solution: ["Bxf2", "Nxf2", "Rxf2+", "Kg1", "Rg2+", "Qxg2", "Qxg2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 154, date: "2020", white: "Zhansaya Abdumalik", black: "Deysi Cori T", result: "1-0", fen: "1r5r/NRpk1ppp/p2bp3/7b/3P1P2/P1N4P/2q2PB1/4QRK1 w - - 1 1", solution: ["Bc6+", "Ke7", "Nd5+", "Kf8", "Rxb8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 155, date: "2020", white: "Evgeny Ermolaev", black: "Zhansaya Abdumalik", result: "0-1", fen: "6rk/1pp3qp/p1p3r1/4R3/2N1Qp2/3P3P/PPP2P1K/5R2 b - - 0 1", solution: ["Rg2+", "Kh1", "Rg1+", "Kh2", "Qg2+", "Qxg2", "R8xg2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 156, date: "2014", white: "Nodirbek Abdusattorov", black: "Bobur Sattarov", result: "1-0", fen: "3qrb2/3n1p1k/ppb3p1/2p1BNQn/P1P2P2/1P6/2B3PP/3R2K1 w - - 1 1", solution: ["Qxh5+", "gxh5", "Ne7+", "Be4", "Bxe4+", "f5", "Bxf5+", "Kh6", "Ng8#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 157, date: "2017", white: "Nodirbek Abdusattorov", black: "Damir Ismagilov", result: "1-0", fen: "8/p4ppk/1p4p1/4R3/4NP2/P4P2/1P3BKP/3q4 w - - 1 1", solution: ["Ng5+", "Kh6", "Re8", "Qh1+", "Kxh1", "f6", "Rh8#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 158, date: "2017", white: "Vladimir Egin", black: "Nodirbek Abdusattorov", result: "0-1", fen: "4k3/R2Rr2p/2p5/6p1/4r3/5KP1/P6P/8 b - - 0 1", solution: ["g4+", "Kg2", "Re2+", "Kf1", "Re1+", "Kf2", "R7e2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 159, date: "1998", white: "Thal Abergel", black: "Serge Gaston", result: "1-0", fen: "5rk1/4pp1p/p2p2pP/3Pb1P1/qp2P3/4PQ1B/P1R3K1/8 w - - 1 1", solution: ["Qxf7+", "Rxf7", "Rc8+", "Qe8", "Rxe8+", "Rf8", "Be6+", "Kh8", "Rxf8#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 160, date: "2017", white: "Jayden Lee", black: "Hans Niemann", result: "0-1", fen: "6k1/p4pp1/6p1/4B1P1/BPp1nP2/4b2P/P6K/R4r2 b - - 0 1", solution: ["Rf2+", "Kg1", "Re2+", "Kf1", "Ng3#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 161, date: "2004", white: "Thal Abergel", black: "Marjan Mitrovic", result: "1-0", fen: "4r2k/p3NR1p/3pb1pB/1p6/2rbP3/8/PPP5/2K4R w - - 1 1", solution: ["Rxh7+", "Kxh7", "Bf8+", "Bh3", "Rxh3#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 162, date: "2005", white: "Thal Abergel", black: "Daniyyl Dvirnyy", result: "1-0", fen: "2r1qr2/pp4k1/3p1p2/3PpR1Q/7n/2P1b3/PPB3PP/5R1K w - - 1 1", solution: ["Rg5+", "Qg6", "Rxg6+", "Kf7", "Rg7+", "Kxg7", "Qh7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 163, date: "2006", white: "Thal Abergel", black: "Sigurbjorn Bjornsson", result: "1-0", fen: "r2k3r/b4R2/1q4Q1/3pp2p/P5pP/1NP3B1/6P1/1K6 w - - 1 1", solution: ["Qg5+", "Kc8", "Qf5+", "Kb8", "Qxe5+", "Kc8", "Rc7+", "Qxc7", "Qxc7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 164, date: "2012", white: "Thal Abergel", black: "Ilya Khmelniker", result: "1-0", fen: "5r2/1R5p/2p1Q1pk/3p4/2p5/q7/2B2PPP/7K w - - 1 1", solution: ["Rxh7+", "Kg5", "f4+", "Kxf4", "Rh4+", "Kg5", "Rg4+", "Kh6", "Qxg6#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 165, date: "2014", white: "Thal Abergel", black: "Piotr Jagodzinski", result: "1-0", fen: "2R3r1/pB1kpb2/3qp3/r7/5P2/PQ1R4/1P4P1/K7 w - - 1 1", solution: ["Bc6+", "Kxc8", "Qb7+", "Kd8", "Qb8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 166, date: "2015", white: "Thal Abergel", black: "Emilio Sanchez Jerez", result: "1-0", fen: "2r2rk1/pQ2p3/4P1pR/2p2p2/1p3Bb1/3P4/PPq2P2/R3K3 w Q - 1 1", solution: ["Rxg6+", "Kh7", "Qh1+", "Bh3", "Qxh3+", "Kxg6", "Qh6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 167, date: "2017", white: "Thal Abergel", black: "Clovis Vernay", result: "1-0", fen: "4rr1k/2n4p/q2N1b2/2pnpp2/P3P2P/1PB3Q1/3N1P2/R3K1R1 w Q - 1 1", solution: ["Qg8+", "Rxg8", "Nf7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 168, date: "1998", white: "Tatev Abrahamyan", black: "Maka Purtseladze", result: "1-0", fen: "r1n4r/ppq2p1k/2p2Pp1/3p1BQp/3P4/2P4P/PP4P1/4RRK1 w - - 1 1", solution: ["Qxh5+", "Kg8", "Re8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 169, date: "2006", white: "Tatev Abrahamyan", black: "Stephen Muhammad", result: "1-0", fen: "3r3b/p6Q/2prkq2/1p1n1NR1/5p2/1BP5/PP3P2/6RK w - - 1 1", solution: ["Re1+", "Qe5", "Qe7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 170, date: "2010", white: "Tatev Abrahamyan", black: "Angelo Young", result: "1-0", fen: "3R1bk1/1p3r1p/p5p1/4P1P1/2Q2n2/1P3q2/1BP5/2KR4 w - - 1 1", solution: ["Rxf8+", "Kxf8", "Qc8+", "Kg7", "e6+", "Qc3", "Bxc3+", "Rf6", "Bxf6#",], alternatives: {
            "Kxf8": ["Rd8+"]
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 171, date: "2012", white: "Tatev Abrahamyan", black: "Timothy Taylor", result: "1-0", fen: "3q1r2/p4p1k/2pprPp1/2p3Qp/4P3/1Pb4R/1PP3PP/5R1K w - - 1 1", solution: ["Rxh5+", "Kg8", "Qh6", "gxh5", "Qg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 172, date: "2012", white: "Tatev Abrahamyan", black: "Regina Narva", result: "1-0", fen: "4r1k1/p6R/q2pp1PB/4n1Q1/7P/2r5/PPP5/2K2R2 w - - 1 1", solution: ["Rh8+", "Kxh8", "Qf6+", "Kg8", "Qg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 173, date: "2014", white: "Tatev Abrahamyan", black: "Heini Puuska", result: "1-0", fen: "r4k1r/5P1p/2p2p2/2q2Nb1/1p4Q1/1P6/1P3PPP/1K1RR3 w - - 1 1", solution: ["Re8+", "Rxe8", "fxe8=Q+", "Kxe8", "Qh5+", "Kf8", "Rd8#",], alternatives: {
            "Rxe8": ["fxe8=R+"]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 174, date: "2014", white: "Tatev Abrahamyan", black: "Sophie Milliet", result: "1-0", fen: "q4r2/2pR3p/2b3k1/6p1/1p2p3/1B4QP/2P2PP1/6K1 w - - 1 1", solution: ["Rg7+", "Kxg7", "Qxg5+", "Kh8", "Qe5+", "Rf6", "Qxf6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 175, date: "2006", white: "Hana Itkis", black: "Tatev Abrahamyan", result: "0-1", fen: "2q5/6k1/5p2/P2p3p/3B4/4Pp1b/5P1P/4Q2K b - - 0 1", solution: ["Qg4", "Qg1", "Bg2+", "Qxg2", "Qxg2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 176, date: "2006", white: "Alexandra Jule", black: "Tatev Abrahamyan", result: "0-1", fen: "8/3q1r2/7k/6p1/1P2Pr2/5b1P/5R2/2Q2RK1 b - - 0 1", solution: ["Rg4+", "hxg4", "Qxg4+", "Kh2", "Qh5+", "Kg1", "Qh1#",], alternatives: {
            "Kh2": ["Qh4+"]
        }, description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 177, date: "2007", white: "George Trammell", black: "Tatev Abrahamyan", result: "0-1", fen: "r3k3/1p1n1p2/4p3/3pP3/p5Kb/P4B2/1P3qP1/R1BQR3 b q - 0 1", solution: ["Qg3+", "Kh5", "Be7", "Kh6", "Qg6#",], alternatives: {
            "Kh5": ["Bd8",]
        }, description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 178, date: "2013", white: "Jue Wang", black: "Tatev Abrahamyan", result: "0-1", fen: "2k3r1/pp3Q1R/q1b3r1/4P3/8/P1B4K/2P5/1R3n2 b - - 0 1", solution: ["Bg2+", "Kh4", "Rg4+", "Kh5", "R8g5#",], alternatives: {
            "Kh5": ["Ng3#",]
        }, description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 179, date: "2014", white: "Suzie Blackburn", black: "Tatev Abrahamyan", result: "0-1", fen: "2kr1br1/pp2pb2/4Pp1p/2p1q3/2P5/1N5P/PPKp3P/1R1Q1B1R b - - 0 1", solution: ["Qe4+", "Kc3", "Qe3+", "Kc2", "Bg6+", "Bd3", "Qxd3#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 180, date: "?", white: "Unknown", black: "Mikhail Tal", result: "0-1", fen: "kr1r4/7p/2bqp1p1/p7/1Pp1PPNP/K1B1n1PB/PP5R/RN2Q3 b - - 0 1", solution: ["Qxb4+", "Bxb4", "Rd2", "Qxd2", "Nc2+", "Qxc2", "axb4#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 181, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "6Q1/8/8/8/5K1b/7k/8/8 w - - 0 1", solution: ["Kf3", "Bg5", "Qxg5", "Kh2", "Qg2#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 182, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "r2qk2r/3p1ppp/p1nQpn2/1p6/2N1b3/BP6/P1P2PP1/R3KB1R w - - 0 1", solution: ["Qf8+", "Rxf8", "Nd6+", "Ke7", "Nf5+", "Ke8", "Nxg7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 183, date: "1998", white: "Michael Adams", black: "Luis Comas Fabrego", result: "1-0", fen: "r4kr1/1b2R1n1/pq4p1/4Q3/1p4P1/5P2/PPP4P/1K2R3 w - - 0 1", solution: ["Rf7+", "Kxf7", "Qe7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 184, date: "1992", white: "Michael Adams", black: "Eric Lobron", result: "1-0", fen: "8/7p/5pk1/3n2pq/3N1nR1/1P3P2/P6P/4QK2 w - - 0 1", solution: ["Qe8+", "Kg7", "Nf5#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 185, date: "1993", white: "Michael Adams", black: "Vasilios Kotronias", result: "1-0", fen: "3r3k/6pp/p3Qn2/P3N3/4q3/2P4P/5PP1/6K1 w - - 0 1", solution: ["Nf7+", "Kg8", "Nh6+", "Kh8", "Qg8+", "Nxg8", "Nf7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 186, date: "1993", white: "Michael Adams", black: "Sherhard", result: "1-0", fen: "2bq1k1r/r5pp/p2b1Pn1/1p1Q4/3P4/1B6/PP3PPP/2R1R1K1 w - - 0 1", solution: ["Qxd6+", "Qxd6", "Rxc8+", "Qd8", "Rxd8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 187, date: "1993", white: "Michael Adams", black: "Jeroen Piket", result: "1-0", fen: "8/2k2r2/pp6/2p1R1Np/6pn/8/Pr4B1/3R3K w - - 0 1", solution: ["Ne6+", "Kb8", "Rd8+", "Ka7", "Ra8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 188, date: "1997", white: "Michael Adams", black: "Neil McDonald", result: "1-0", fen: "5k2/1b5p/p3R3/1pq2p1P/8/1BP2P1Q/PP3r2/6RK w - - 0 1", solution: ["Rg8+", "Kxg8", "Re8+", "Kg7", "Qg3+", "Kf6", "Qh4+", "Kg7", "Qg5#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 189, date: "1997", white: "Michael Adams", black: "Sinisa Drazic", result: "1-0", fen: "4R3/6k1/3bp1p1/1p6/p3b1QK/2P1P3/3q4/5R2 w - - 0 1", solution: ["Rf7+", "Kxf7", "Qxe6+", "Kg7", "Qd7+", "Be7+", "Qxe7+", "Kh6", "Rh8#",], alternatives: {
            "Be7+": ["Rxe7+", "Rh7#",]
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 190, date: "2002", white: "Michael Adams", black: "Vladislav Borovikov", result: "1-0", fen: "3r2k1/1p3p1p/p1n2qp1/2B5/1P2Q2P/6P1/B2bRP2/6K1 w - - 0 1", solution: ["Qe8+", "Rxe8", "Rxe8+", "Kg7", "Bf8+", "Kg8", "Bh6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 191, date: "2013", white: "Michael Adams", black: "Javier Aguera Naredo", result: "1-0", fen: "r1b3r1/p4p1p/2p1kBp1/b7/2p1N3/2P5/PP3PPP/2KR3R w - - 1 1", solution: ["Rd6+", "Kf5", "Ng3+", "Kg4", "Rd4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 192, date: "2013", white: "Michael Adams", black: "Wenjun Ju", result: "1-0", fen: "r6r/p6p/bb1R2pB/3R2Nn/1p4k1/8/1PP2PPP/6K1 w - - 1 1", solution: ["h3+", "Kf4", "Rf6+", "Nxf6", "g3#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 193, date: "1940", white: "Weaver Adams", black: "Stephens", result: "1-0", fen: "2r1r2k/6pp/5n2/2N1N3/1q1P1P2/2p5/Q5PP/4R2K w - - 1 1", solution: ["Nf7+", "Kg8", "Nh6+", "Kh8", "Qg8+", "Nxg8", "Nf7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 194, date: "1946", white: "Weaver Adams", black: "Sven Almgren", result: "1-0", fen: "r7/4k3/pp2pNp1/3pP3/1b1N4/8/P6P/2R3K1 w - - 1 1", solution: ["Rc7+", "Kf8", "Nxe6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 195, date: "1948", white: "Weaver Adams", black: "Anthony Santasiere", result: "1-0", fen: "7r/pp1k3p/4N1pB/3PQ3/6q1/8/P1P2b1P/7K w - - 1 1", solution: ["Qc7+", "Ke8", "Ng7+", "Kf8", "Nf5+", "Ke8", "Nd6#",], alternatives: {
            "Kf8": ["Nh5+", "Nf6#"], "Ke8": ["Qe7#",]
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 196, date: "2005", white: "B Adhiban", black: "Upadhyaya Anwesh", result: "1-0", fen: "r4rk1/3n1p2/1q4pp/1p3N1P/1P1QP3/p4R2/P5P1/5RK1 w - - 1 1", solution: ["Ne7+", "Kh7", "Rxf7+", "Rxf7", "Rxf7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 197, date: "2006", white: "B Adhiban", black: "Amirreza Pourramezanali", result: "1-0", fen: "r6r/pp1bkP2/1qn1p3/3pP3/5PQ1/6P1/PP4K1/R1B1bBNR w - - 1 1", solution: ["Qg5+", "Kf8", "Rxh8+", "Kxf7", "Qf6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 198, date: "2006", white: "B Adhiban", black: "Bajaj Prince", result: "1-0", fen: "r1q2k1r/4pp2/2p3p1/pbPpPNQp/8/1P4R1/P4PPP/3R2K1 w - - 1 1", solution: ["Qxe7+", "Kg8", "Rxg6+", "fxg6", "Qg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 199, date: "2007", white: "B Adhiban", black: "Sunil Prathamesh", result: "1-0", fen: "1r3Q2/2kb3p/pN1N2p1/8/Pp2P1n1/8/1PP3PP/6K1 w - - 1 1", solution: ["Nd5+", "Kc6", "Qxb8", "Ne3", "Qb6#",], alternatives: {
            "Ne3": ["Qc7#"],
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 200, date: "2006", white: "B Adhiban", black: "Bajaj Prince", result: "1-0", fen: "5k2/p1p3Rp/1bp1pP1B/5r2/1p4K1/1P5P/P1P5/8 w - - 1 1", solution: ["Re7+", "Kg8", "f7+", "Rxf7", "Re8+", "Rf8", "Rxf8#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 201, date: "1982", white: "Andras Adorjan", black: "Krunoslav Hulak", result: "1-0", fen: "r1b2n1k/pp3r1p/2nq1P1B/4p1Q1/3pB3/6P1/PP5P/2R2RK1 w - - 1 1", solution: ["Qg7+", "Rxg7", "fxg7+", "Kg8", "Rxf8+", "Qxf8", "gxf8=Q#",], alternatives: {
            "Kg8": ["gxf8=R#"],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 202, date: "1999", white: "Oladapo Adu", black: "Timothy Hamilton", result: "1-0", fen: "1r5k/1B4p1/1p4P1/2p4p/8/6PK/7P/7R w - - 1 1", solution: ["Rf1", "Rd8", "Bd5", "c4", "Rf5", "c3", "Rxh5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 203, date: "2000", white: "Clive Usiskin", black: "Oladapo Adu", result: "0-1", fen: "r4rk1/pp2q1pp/2p1p3/3P4/3PP3/5Rb1/PPQB2P1/R6K b - - 0 1", solution: ["Qh4+", "Kg1", "Rxf3", "gxf3", "Qh2+", "Kf1", "Qf2#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 204, date: "2003", white: "Oladapo Adu", black: "Yimam Abera", result: "1-0", fen: "3rkb2/2Rb4/7Q/5P2/1P2P3/1KP5/3r3P/8 w - - 1 1", solution: ["Qg6+", "Ke7", "Qe6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 205, date: "2006", white: "Oladapo Adu", black: "Peng-Kong Chan", result: "1-0", fen: "6kb/R6p/6nP/3qp3/1B2RPQ1/1P6/2rp3N/6K1 w - - 1 1", solution: ["Qxg6+", "hxg6", "h7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 206, date: "2011", white: "Oladapo Adu", black: "Nicolae Atanasiu", result: "1-0", fen: "r1q2rk1/p4p1p/1pn2p2/2b1B3/5Q2/P7/1PP2PPP/2KR3R w - - 1 1", solution: ["Qg3+", "Qg4", "Qxg4+", "Kh8", "Bxf6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 207, date: "2014", white: "Oladapo Adu", black: "Omolabake Coker", result: "1-0", fen: "r5r1/p1p2Qbk/3p1B2/5P2/2p1q3/7P/PPP3P1/1K1R1R2 w - - 1 1", solution: ["Qg6+", "Kh8", "Qh5#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 208, date: "2017", white: "Oladapo Adu", black: "Atisto Liu", result: "1-0", fen: "8/1brq1p1k/pn1p1Qp1/1ppP2Bp/2P1r2P/1B3R2/PP3PP1/3R2K1 w - - 1 1", solution: ["Bh6", "Re1+", "Rxe1", "bxc4", "Qg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 209, date: "1997", white: "Weaver Adams", black: "Anthony Santasiere", result: "1-0", fen: "2kb3r/R1p3p1/3pq3/1P1N1p2/2P2P1n/4PQPr/1B1P1R1P/6K1 w - - 0 1", solution: ["Nb6+", "cxb6", "Qb7#",], alternatives: {
            "cxb6": ["Qa8#"],
        }, description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 210, date: "1997", white: "Evgeny Agrest", black: "Reinhardt Bachler", result: "1-0", fen: "r4k2/1pp3q1/3p1NnQ/p3P3/2P3p1/8/PP6/2K4R w - - 0 1", solution: ["Qxg7+", "Kxg7", "Rh7+", "Kf8", "e6", "Ne5", "e7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 211, date: "1910", white: "Rosenthal", black: "Karl Ahues", result: "0-1", fen: "7r/ppq2pk1/2Pb1pp1/5b2/2Q5/1B1P1R2/PPP1N1Pr/5RK1 b - - 0 1", solution: ["Bc5+", "Qd4", "Rxg2+", "Kxg2", "Qh2#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 212, date: "1934", white: "Karl Ahues", black: "Birger Rasmusson", result: "1-0", fen: "2r2rk1/1b3pp1/4p3/p3P1Q1/1pqP1R2/2P5/PP1B1K1P/R7 w - - 0 1", solution: ["Qxg7+", "Kxg7", "Rg1+", "Bg2", "Rxg2+", "Kh8", "Rh4#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 213, date: "1935", white: "Karl Ahues", black: "Gerhard Weissgerber", result: "1-0", fen: "7R/5rp1/2p1r1k1/2q5/4pP1Q/4P3/5PK1/7R w - - 0 1", solution: ["Rh6+", "gxh6", "Qxh6+", "Kf5", "Qg5#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 214, date: "1962", white: "Weaver Adams", black: "Anthony Santasiere", result: "1-0", fen: "1rb4k/4bp1p/p3pNp1/1p2qP2/P7/5B2/1PPQ2PP/3R3K w - - 0 1", solution: ["Qh6", "Qxh2+", "Kxh2", "Bd6+", "Kh3", "Bd7", "Qxh7#",], alternatives: {
            "Bd6+": ["Kh1"], "Bd6+": ["Rxd6"],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 215, date: "2000", white: "Varuzhan Akobian", black: "Imed Abdelnabbi", result: "1-0", fen: "5rk1/pp1r1pp1/8/n2N3R/b2P4/P4Q2/1P1q1PPP/1R4K1 w - - 0 1", solution: ["Nf6+", "gxf6", "Qxf6", "Qd1+", "Rxd1", "Bxd1", "Rh8#",], alternatives: {
            "Bxd1": ["Qh8#", "Qg5#"],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 216, date: "2002", white: "Andranik Matikozian", black: "Varuzhan Akobian", result: "0-1", fen: "1k5r/pp1Q1pp1/2p4r/b4Pn1/3NPp2/2P2P2/1q4B1/1R2R1K1 b - - 0 1", solution: ["Rh1+", "Bxh1", "Nh3+", "Kf1", "Qf2#",], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 217, date: "2002", white: "Hikaru Nakamura", black: "Varuzhan Akobian", result: "0-1", fen: "2r5/6pk/1q2p2p/4b3/1P2P3/1R1Q3P/B4rP1/1K1R4 b - - 0 1", solution: ["Qa7", "Ra3", "Rb2+", "Ka1", "Rb3+", "Qd4", "Bxd4+", "Rxd4", "Qxd4#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 218, date: "2003", white: "Varuzhan Akobian", black: "Eduardo Ortiz", result: "1-0", fen: "1n4k1/ppq3b1/4p2R/2p2r2/2PrNpQ1/2N3P1/PP6/2K4R w - - 0 1", solution: ["Qg6", "Rd1+", "Nxd1", "Kf8", "Rh8+", "Bxh8", "Rxh8+", "Ke7", "Qe8#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 219, date: "2005", white: "Jerry Hanken", black: "Varuzhan Akobian", result: "0-1", fen: "3rr1k1/p4pp1/8/b1N5/1P1p3p/P3qbPP/1B3nBK/Q1R3R1 b - - 0 1", solution: ["hxg3+", "Kxg3", "Bc7+", "Kh4", "g5#",], alternatives: {
            "Kh4": ["Qh6#", "Qf4#", "Qe7#"],
        }, description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 220, date: "2005", white: "Varuzhan Akobian", black: "Blas Lugo", result: "1-0", fen: "8/p3q2k/1p2p1p1/r2bQ3/3P2R1/8/6P1/5R1K w - - 0 1", solution: ["Rf7+", "Qxf7", "Rh4+", "Kg8", "Rh8#",], alternatives: {
            "Kg8": ["Qh8#",],
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 221, date: "2008", white: "Zhe Quan", black: "Varuzhan Akobian", result: "0-1", fen: "5rk1/p2RQ1pp/4p1r1/2p2p2/2P2q2/1P3P1K/P3BP1b/3R4 b - - 0 1", solution: ["Rg3+", "Kxh2", "Rg4+", "Kh3", "Qh6+", "Qh4", "Qxh4#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 222, date: "2009", white: "Varuzhan Akobian", black: "Jonathan Hilton", result: "1-0", fen: "2brr1k1/p2Rp2p/1pn1PppB/2p5/2B5/8/PQ3PPP/6K1 w - - 1 1", solution: ["Qxf6", "exf6", "e7+", "Kh8", "exd8=Q", "Ne7", "Qxe8+", "Ng8", "Qxg8#",], alternatives: {
            "Ng8": ["Bg7#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 223, date: "2009", white: "Varuzhan Akobian", black: "Pavel Tregubov", result: "1-0", fen: "k1br1b2/ppQq4/P4p2/1P3pp1/3N3p/4P2P/5PP1/RR4K1 w - - 1 1", solution: ["axb7+", "Bxb7", "Rxa7+", "Kxa7", "Ra1+", "Ba3", "Rxa3#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 224, date: "2014", white: "Varuzhan Akobian", black: "Conrad Holt", result: "1-0", fen: "8/4R1R1/2b2p2/2Bp1k1p/r2P4/P6P/2r2PP1/6K1 w - - 1 1", solution: ["g4+", "hxg4", "hxg4+", "Kf4", "Bd6+", "Kf3", "Re3#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 225, date: "2019", white: "Varuzhan Akobian", black: "Antenaina Rakotomaharo", result: "1-0", fen: "2r2k2/R6p/2n3p1/3BB3/P4p2/5P2/6PP/2n2K2 w - - 1 1", solution: ["Bg7+", "Ke8", "Bf7+", "Kd8", "Bf6+", "Ne7", "Bxe7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 226, date: "1991", white: "Vladimir Akopian", black: "Gildardo Garcia", result: "1-0", fen: "4rk2/pb1Q1p2/6p1/3p2p1/2pP4/2q1PPK1/Pr4P1/1B2R2R w - - 0 1", solution: ["Rh8+", "Kg7", "Rh7+", "Kxh7", "Qxf7+", "Kh8", "Rh1#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 227, date: "2010", white: "Vladimir Akopian", black: "Vadim Zvjaginsev", result: "1-0", fen: "r7/4k1Pp/2n1p2P/q2pp1N1/1p4P1/1P6/P4R2/1K1R4 w - - 0 1", solution: ["Rf7+", "Kd6", "Ne4#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 228, date: "2012", white: "Anton Kovaliov", black: "Vladimir Akopian", result: "0-1", fen: "4q3/7k/1p1Q2bp/8/3p1p2/5pP1/1P3P1P/2N2K2 b - - 0 1", solution: ["Bd3+", "Nxd3", "Qe2+", "Kg1", "Qd1+", "Ne1", "Qxe1#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 229, date: "2018", white: "Vladimir Akopian", black: "Johan-Sebastian", result: "1-0", fen: "r1b5/ppkn1P1r/3NR3/7p/1qp5/5Q1P/PP3PP1/3R2K1 w - - 1 1", solution: ["Ne8+", "Kb8", "Qf4+", "Ne5", "Qxe5+", "Qd6", "Qxd6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 230, date: "1965", white: "Lev Alburt", black: "Vasily Byvshev", result: "1-0", fen: "1r4k1/2pR2pr/bp5p/2p1P1q1/P1p1QN2/1P5P/6P1/5R1K w - - 0 1", solution: ["Qd5+", "Kh8", "Rd8+", "Rxd8", "Ng6+", "Qxg6", "Qxd8+", "Qe8", "Qxe8#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 231, date: "1974", white: "Lev Alburt", black: "K Grigorian", result: "1-0", fen: "5rrk/ppq3np/2p1p3/4N1R1/3P1P2/6QP/PP6/2K3R1 w - - 0 1", solution: ["Ng6+", "hxg6", "Rxg6", "Qxf4+", "Qxf4", "Nf5", "Rh6+", "Nxh6", "Qxh6#",], alternatives: {
            "Nf5": ["Qh6+", "Nxh6", "Rxh6#"],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 232, date: "1974", white: "Lev Alburt", black: "Eduard Gufeld", result: "1-0", fen: "2b3k1/1q3rb1/p1N3Qp/3p4/3P4/2P5/1P2RpPP/R4K2 w - - 0 1", solution: ["Re8+", "Rf8", "Ne7+", "Qxe7", "Rxe7", "Rf7", "Qxf7+", "Kh8", "Qxg7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 233, date: "1989", white: "Lev Alburt", black: "Peter Yu", result: "1-0", fen: "6k1/5pb1/3p1n2/q1pP2Q1/2P4p/1r2R2P/5PPB/4R1K1 w - - 0 1", solution: ["Re8+", "Nxe8", "Rxe8+", "Kh7", "Qf5+", "Kh6", "Bf4#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 234, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "2Q5/p3b1k1/2p2rPp/2q5/4B3/P2P4/7P/6RK w - - 0 1", solution: ["Qh8+", "Kxh8", "g7+", "Kg8", "Bh7+", "Kf7", "g8=Q#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 235, date: "1912", white: "Stepan Levitsky", black: "Frank Marshall", result: "0-1", fen: "5rk1/pp4pp/4p2r/4R1Q1/3n4/2q4B/P1P2PPP/5RK1 b - - 0 1", solution: ["Rxh3", "Rc5", "Qg3", "Qxg3", "Ne2+", "Kh1", "Nxg3+", "fxg3", "Rxf1#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 236, date: "1923", white: "Alexander Alekhine", black: "O Blaut", result: "1-0", fen: "1n2r3/2pq1k2/pb1pNpp1/3P4/5RP1/3Q3P/5P2/6K1 w - - 0 1", solution: ["Rxf6+", "Ke7", "Qxg6", "Bxf2+", "Kxf2", "Rf8", "Qg7+", "Rf7", "Qxf7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 237, date: "1924", white: "Alexander Alekhine", black: "Freeman", result: "1-0", fen: "4Rnk1/pr3ppp/1p3q2/5NQ1/2p5/8/P4PPP/6K1 w - - 1 1", solution: ["Nh6+", "Qxh6", "Rxf8+", "Kxf8", "Qd8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 238, date: "1925", white: "Alexander Alekhine", black: "K Meck", result: "1-0", fen: "6r1/6rk/pq1P4/1p2p1pB/2p1P2Q/2P3RP/PP4PK/8 w - - 1 1", solution: ["Bg6+", "Kxg6", "Qxg5+", "Kf7", "Qe7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 239, date: "1926", white: "Alexander Alekhine", black: "Pita", result: "1-0", fen: "rnb1r1k1/ppp1Bp1p/6pQ/3p4/8/2qB4/P1P2PPP/R3R1K1 w - - 0 1", solution: ["Bf6", "Qxe1+", "Bf1", "Qxf2+", "Kxf2", "Re2+", "Bxe2", "d4", "Qg7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 240, date: "1930", white: "Alexander Alekhine", black: "Goluvsky", result: "1-0", fen: "r1bn1k1r/ppp2ppp/1b1p3n/2qNp1N1/2B1P2Q/2PP4/PP4PP/R1BK1R2 w - - 1 1", solution: ["Ne6+", "Nxe6", "Qe7+", "Kg8", "Qe8+", "Nf8", "Ne7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 241, date: "1931", white: "Alexander Alekhine", black: "Vasic", result: "1-0", fen: "r1bqk2r/p1pn1pp1/1p2pn1p/8/3P4/B1PB4/P1P1QPPP/R3K1NR w - - 0 1", solution: ["Qxe6+", "fxe6", "Bg6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 242, date: "1933", white: "Alexander Alekhine", black: "Stegerhoek", result: "1-0", fen: "5k2/R5p1/7p/3bN3/P7/7P/rr3PP1/4R1K1 w - - 0 1", solution: ["Ng6+", "Kg8", "Re8+", "Kh7", "Nf8+", "Kh8", "Ne6+", "Kh7", "Rxg7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 243, date: "1934", white: "Alexander Alekhine", black: "Emanuel Lasker", result: "1-0", fen: "3r1rn1/pp1n2kp/1qpN1pp1/6Q1/4P3/1B1R4/PP3PPP/2R3K1 w - - 0 1", solution: ["Nf5+", "Kh8", "Qxg6", "Rf7", "Qxf7", "Qxf2+", "Kxf2", "c5", "Qg7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 244, date: "1992", white: "Alexey Aleksandrov", black: "Dimitri Reinderman", result: "1-0", fen: "1n2r3/4q1k1/3p2p1/3B2P1/5Q2/7R/1b3N2/6K1 w - - 0 1", solution: ["Rh7+", "Kxh7", "Qh2+", "Kg7", "Qh6#",], alternatives: {
            "Kxh7": ["Qh4+",],
        }, description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 245, date: "2008", white: "Kirill Alekseenko", black: "Aleksey Enalskiy", result: "1-0", fen: "1k6/3R1p1p/2BN1p2/1p6/p7/1r6/K4PPP/8 w - - 1 1", solution: ["Rb7+", "Ka8", "Rb6+", "Ka7", "Nc8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 246, date: "2009", white: "Kirill Alekseenko", black: "Alexei Terzi", result: "1-0", fen: "r1b2k1r/pp1n3p/5p2/qN1pp1N1/5R2/3B4/2P2PPP/3Q1RK1 w - - 1 1", solution: ["Qh5", "Ke7", "Qf7+", "Kd8", "Ne6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 247, date: "2010", white: "Kirill Alekseenko", black: "Mikhail Pashinsky", result: "1-0", fen: "r5k1/2qbbrp1/p7/3Bp3/3p3R/NP4P1/P4PK1/R1BQ4 w - - 1 1", solution: ["Rh8+", "Kxh8", "Qh5+", "Kg8", "Qxf7+", "Kh8", "Qh5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 248, date: "2011", white: "Kirill Alekseenko", black: "Boris Markoja", result: "1-0", fen: "8/1p1b4/3p1Qp1/q2rp2k/p1P5/2P2R2/P5PP/6K1 w - - 1 1", solution: ["g4+", "Bxg4", "Qh8+", "Kg5", "h4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 249, date: "2013", white: "Kirill Alekseenko", black: "Danill Nedostup", result: "1-0", fen: "3R1bk1/p4ppp/1p5q/6N1/2P5/1P3b2/PB2RP1P/2K5 w - - 1 1", solution: ["Rxf8+", "Kxf8", "Ba3+", "Qd6", "Bxd6+", "Kg8", "Re8#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 250, date: "2013", white: "Kirill Alekseenko", black: "Michail Panarin", result: "1-0", fen: "5k2/1bq3p1/5pQ1/1p1rpP2/2n5/1N5R/1PP4P/3R3K w - - 1 1", solution: ["Rh8+", "Ke7", "Qe8+", "Kd6", "Qe6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 251, date: "1998", white: "Oleg Taranenko", black: "Evgeny Alekseev", result: "0-1", fen: "6k1/1pp3bp/1p6/3P2p1/r7/3BK2P/P4rP1/3R3R b - - 0 1", solution: ["Bd4+", "Ke4", "Rf4#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 252, date: "2017", white: "Johan-Sebastian", black: "Evgeny Alekseev", result: "1-0", fen: "5rk1/4Rp1p/1q1pBQp1/5r2/1p6/1P4P1/2n2P2/3R2K1 w - - 0 1", solution: ["Bxf7+", "Rxf7", "Re8+", "Rf8", "Rxf8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 253, date: "2018", white: "Evgeny Alekseev", black: "Oleg Bykov", result: "1-0", fen: "3b4/3Q4/pr4kp/q1p1p3/7P/3PB1P1/7K/1R6 w - - 1 1", solution: ["h5+", "Kxh5", "Qf5+", "Bg5", "g4+", "Kh4", "Bf2#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 254, date: "2018", white: "Evgeny Alekseev", black: "Egor Tatarintsev", result: "1-0", fen: "r2q1rk1/pp2bp2/2p1p1p1/3nN1PQ/3P1P2/2P3B1/1P2R3/3R2K1 w - - 1 1", solution: ["Nxg6", "f5", "Qh8+", "Kf7", "Ne5+", "Ke8", "Qh5+", "Rf7", "Qxf7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 255, date: "2018", white: "Vladimir Burmakin", black: "Evgeny Alekseev", result: "0-1", fen: "2r2rk1/7p/1p1q2p1/p2p1p2/3P4/2Pb1QP1/PP1N3P/2KRR3 b - - 0 1", solution: ["Rxc3+", "bxc3", "Qa3#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 256, date: "2013", white: "Evgeny Alekseev", black: "Irina Krush", result: "1-0", fen: "5k1r/1pN3pp/p1nr2q1/2Q5/2B3b1/8/PPP2PPP/4R1K1 w - - 1 1", solution: ["Qxd6+", "Qxd6", "Re8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 257, date: "2014", white: "Evgeny Alekseev", black: "Stepan Osinovsky", result: "1-0", fen: "2r3k1/5p2/5Qp1/p2Np2p/3nP2P/P5P1/2q2P2/1R4K1 w - - 1 1", solution: ["Ne7+", "Kf8", "Nxg6+", "Kg8", "Qh8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 258, date: "2001", white: "Olga Alexandrova", black: "Nadezda Stojanovic", result: "1-0", fen: "r2b3k/p2q1r1p/1pn3RQ/2B2p2/2B5/P7/1P3PPP/R5K1 w - - 1 1", solution: ["Rg8+", "Kxg8", "Qf8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 259, date: "2018", white: "Bassem Amin", black: "Dmitry Gordievsky", result: "1-0", fen: "5b1r/r2R1Qp1/pkB1p2p/1pp1P1N1/8/2P5/q4PPP/1R4K1 w - - 1 1", solution: ["Rb7+", "Ka5", "Qc7+", "Ka4", "Bxb5+", "Ka3", "Qa5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 260, date: "2001", white: "Olga Alexandrova", black: "Tatiana Melamed", result: "1-0", fen: "r6k/1b1p1Qbp/2n3p1/q1p1r1B1/2B5/2N5/PP3PPP/R3R1K1 w - - 1 1", solution: ["Bf6", "Rxe1+", "Rxe1", "g5", "Qxg7#",], alternatives: {
            "g5": ["Bxg7#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 261, date: "2001", white: "Olga Alexandrova", black: "Maria Velcheva", result: "1-0", fen: "2r4k/1b2bBp1/p6p/4N2Q/1q1Bn3/8/1P3PPP/3R2K1 w - - 1 1", solution: ["Ng6+", "Kh7", "Nf8+", "Bxf8", "Qg6+", "Kh8", "Qxh6#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 262, date: "2003", white: "Olga Alexandrova", black: "Marija Petrovic", result: "1-0", fen: "2rR4/4Bpkp/pQ3Npb/8/1P3P2/P6P/q5P1/6K1 w - - 1 1", solution: ["Nh5+", "gxh5", "Qf6#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 263, date: "2004", white: "D Tishin", black: "Olga Alexandrova", result: "0-1", fen: "8/p5kp/P3p1p1/2qb2N1/5Pn1/6P1/4RnBP/1R4K1 b - - 0 1", solution: ["Nh3+", "Kh1", "Qg1+", "Rxg1", "Ngf2+", "Rxf2", "Nxf2#",], alternatives: {
            "Rxg1": ["Nhf2+", "Rxf2", "Nxf2#"],
        }, description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 264, date: "2005", white: "Sylvain Leburgue", black: "Olga Alexandrova", result: "0-1", fen: "8/2Q3p1/3P1pk1/4pq2/P5nP/7K/6P1/8 b - - 0 1", solution: ["Qd3+", "g3", "Qf1+", "Kxg4", "f5#",], alternatives: {
            "Kxg4": ["Qf5#",],
        }, description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 265, date: "2011", white: "Zoltan Almasi", black: "Sergey Volkov", result: "1-0", fen: "2b1B1nk/2n2Qp1/1q2p2p/2NpPp2/1PpP1P1N/2P4P/6P1/6K1 w - - 1 1", solution: ["Ng6+", "Kh7", "Nf8+", "Kh8", "Qg6", "Nf6", "exf6", "e5", "Qxg7#",], alternatives: {
            "e5": ["Qh7#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 266, date: "2014", white: "Zoltan Almasi", black: "Sergey Fedorchuk", result: "1-0", fen: "r2k1n1R/1q3p2/b4N2/3p4/1p3P2/p2PB3/PP2Q1r1/1KR5 w - - 1 1", solution: ["Bb6+", "Qxb6", "Rxf8#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 267, date: "2001", white: "Bassem Amin", black: "Cegmed Batchuluun", result: "1-0", fen: "rr3n1k/1b2bP1p/1qn3pP/3p4/p1pP1B2/P1P2NP1/4QPB1/R3R1K1 w - - 1 1", solution: ["Qxe7", "Qxd4", "cxd4", "Nd7", "f8=Q+", "Nxf8", "Qg7#",], alternatives: {
            "Nd7": ["f8=R+",],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 268, date: "2005", white: "Bassem Amin", black: "Arik Braun", result: "1-0", fen: "8/6p1/5b1r/3R1B1k/6R1/8/5PKP/2r5 w - - 1 1", solution: ["Kh3", "g5", "Bd3", "Rc4", "Rxc4", "Bd4", "Rcxd4", "Rh8", "Rh4#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 269, date: "2005", white: "Bassem Amin", black: "Fouad El Taher", result: "1-0", fen: "1q3r2/1Q3pr1/1n1Np1p1/k3P3/p1pP1R1P/RnP5/1P3P2/3K4 w - - 1 1", solution: ["Rxa4+", "Kxa4", "Qa6+", "Na5", "Qb5#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 270, date: "1996", white: "Claudia Amura", black: "Carlos Bulcourf", result: "1-0", fen: "8/p1R3p1/4p1kn/3p3N/3Pr2P/6P1/PP3K2/8 w - - 0 1", solution: ["Rxg7+", "Kf5", "Rg5#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 271, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "kr6/1p6/p7/8/8/8/1P4BP/R6K w - - 0 1", solution: ["Rxa6#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 272, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "r2B3k/5p1p/8/8/8/b7/7P/K5R1 w - - 0 1", solution: ["Bf6#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 273, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "8/1k3N2/1p6/p3p3/3nR3/1PKP4/P6r/8 b - - 0 1", solution: ["Rc2#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 274, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "7k/2r1n1p1/4Bp2/3P4/5Kp1/6P1/2p2PP1/R7 w - - 0 1", solution: ["Rh1#"], description: "White moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 275, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "k5rr/pp6/8/P7/1P6/2P1p3/4RnB1/4R1K1 b - - 0 1", solution: ["Rh1#"], description: "Black moves and wins in 1.", category: "Mate in 1"
    },
    {
        id: 276, date: "1986", white: "Rustem Dautov", black: "Ashot Anastasian", result: "0-1", fen: "6k1/5pp1/1p6/4P1Qp/3qP1PP/3p4/P4r2/4R2K b - - 0 1", solution: ["d2", "Qe3", "Qxe3", "Rxe3", "d1=Q+", "Re1", "Qxe1#",], alternatives: {
            "Rxe3": ["d1=R+", "Re1", "Rxe1#",],
        }, description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 277, date: "1989", white: "Andrey Elizarov", black: "Ashot Anastasian", result: "0-1", fen: "6k1/2q4p/3pp1p1/6Bn/1r2P3/r1R2P1P/2P2Q2/1BK4R b - - 0 1", solution: ["Rxb1+", "Kd2", "Qxc3+", "Ke2", "Qxc2+", "Bd2", "Nf4#",], alternatives: {
            "Bd2": ["Qd3#", "Qc4#",],
        }, description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 278, date: "2003", white: "Ashot Anastasian", black: "Lilit Mkrtchian", result: "1-0", fen: "1rr4k/4q2p/2b1pNpP/4P1Q1/1p1p1RP1/pP1P4/P1P2R2/6K1 w - - 1 1", solution: ["Ne8", "Qf7", "Rxf7", "Rxe8", "Qf6+", "Kg8", "Qg7#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 279, date: "1951", white: "D A Yanofsky", black: "Frank Ross Anderson", result: "0-1", fen: "r6r/5pk1/p1p3p1/3bP3/1p1q4/5PNP/1P4P1/R1Q1R2K b - - 0 1", solution: ["Rxh3+", "gxh3", "Bxf3+", "Kh2", "Qf2#"], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 280, date: "1851", white: "Adolf Anderssen", black: "Jean Dufresne", result: "1-0", fen: "2q3r1/p2knQ2/1p4p1/2rp3p/6P1/1NP2R2/P4P1P/4R1K1 w - - 1 1", solution: ["Qxe7+", "Kc6", "Nd4#"], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 281, date: "1969", white: "Ulf Andersson", black: "Jouko Lahti", result: "1-0", fen: "r2b1R2/ppr4k/3q2p1/6pN/3P2Q1/1P6/P5PP/5RK1 w - - 1 1", solution: ["Nf6+", "Bxf6", "Qh3+", "Kg7", "Qh8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 282, date: "1969", white: "Ulf Andersson", black: "Zbigniew Doda", result: "1-0", fen: "5k1r/p2bpp2/3p4/2q2PN1/1p1p4/3P1B2/1PP3Qn/6RK w - - 1 1", solution: ["Nh7+", "Ke8", "Qg8+", "Rxg8", "Rxg8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 283, date: "1970", white: "Ulf Andersson", black: "Lawrence Day", result: "1-0", fen: "R2rk1r1/3n1p2/2QP1p1b/4p1Pp/7P/2P1BN2/1q3P2/5RK1 w - - 1 1", solution: ["Rxd8+", "Kxd8", "Qc7+", "Ke8", "Qc8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 284, date: "1975", white: "Ulf Andersson", black: "Vernlund", result: "1-0", fen: "3r1rk1/ppq1nppp/2p5/5b2/2B5/2Q3N1/PPP2PPP/3R1RK1 w - - 1 1", solution: ["Nh5", "Qxh2+", "Kxh2", "Rd4", "Qxd4", "c5", "Qxg7#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 285, date: "1979", white: "Ulf Andersson", black: "Jan-Hein Donner", result: "1-0", fen: "8/p2nq2p/1p1N1pk1/3Q3p/1P2pP2/P5P1/5P2/6K1 w - - 1 1", solution: ["Qg8+", "Qg7", "Qe8+", "Qf7", "Qxf7+", "Kh6", "Nf5#"], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 286, date: "1980", white: "Ulf Andersson", black: "Ian Rogers", result: "1-0", fen: "6rk/3R2rp/8/4Qp2/p1B2P2/1P4P1/6KP/2q5 w - - 1 1", solution: ["Qxg7+", "Rxg7", "Rd8+", "Rg8", "Rxg8#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 287, date: "1984", white: "Ulf Andersson", black: "Roberto Cifuentes", result: "1-0", fen: "2r1n1k1/3RR2p/p5pB/1p2N3/8/6PP/P1q2PK1/8 w - - 1 1", solution: ["Rxe8+", "Rxe8", "Rg7+", "Kf8", "Nd7#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 288, date: "1992", white: "Ulf Andersson", black: "Anders Backlund", result: "1-0", fen: "6k1/p2b1r1p/5p1B/q2P3P/Pn1p4/1Q6/4KPP1/5B2 w - - 1 1", solution: ["Qg3+", "Bg4+", "Qxg4+", "Kh8", "Qc8+", "Qd8", "Qxd8+", "Rf8", "Qxf8#"], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 289, date: "1990", white: "Aleksander Wojtkiewicz", black: "Ulf Andersson", result: "0-1", fen: "5r2/2k5/1p1p3p/pPpPpr2/P1P1N3/4RbPp/3R1P2/6K1 b - - 0 1", solution: ["h2+", "Kxh2", "Rh5+", "Kg1", "Rh1#"], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 290, date: "1997", white: "Dragoljub Velimirovic", black: "Ulf Andersson", result: "0-1", fen: "8/kb3p2/1bq1p3/4P3/2N2P2/1p4Q1/1P2B3/1K6 b - - 0 1", solution: ["Qh1+", "Bf1", "Qxf1+", "Qe1", "Qxe1#"], description: "Black moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 291, date: "2025", white: "Dhananjay Patil", black: "Unknown", result: "1-0", fen: "1r1r2k1/1p3p1p/p1nqb2Q/4N3/1b1P4/3B4/PP3PPP/R4RK1 w - - 10 23", solution: ["Bxh7+", "Kh8", "Nxf7+", "Bxf7", "Bg6+", "Kg8", "Qh7+", "Kf8", "Qxf7#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 292, date: "2002", white: "Dmitry Andreikin", black: "Shakhiyar Rahmanov", result: "1-0", fen: "1r3r2/1p5R/p1n2pp1/1n1B1Pk1/8/8/P1P2BPP/2K1R3 w - - 0 1", solution: ["Bh4+", "Kxf5", "Be6+", "Kf4", "Bg3+", "Kg5", "h4#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 293, date: "2004", white: "Dmitry Andreikin", black: "Evgueij Kretov", result: "1-0", fen: "3r1r2/1pqn1pkp/b3pNp1/4P3/p2R4/P3QB1P/1PP2PP1/4R1K1 w - - 0 1", solution: ["Qh6+", "Kxh6", "Rh4+", "Kg5", "Nxh7+", "Kf5", "Bg4+", "Kf4", "g3#",], description: "White  moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 294, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "krr5/p6p/2q3p1/1b3pn1/3Qp3/B3P3/3P2PP/R5K1 w - - 0 1", solution: ["Qxa7+", "Kxa7", "Bc5+", "Kb7", "Ra7#"], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 295, date: "1999", white: "Jan Markos", black: "Meilis Annaberdiev", result: "0-1", fen: "4r1k1/1Rp4r/2Pp4/3P4/3Qb1p1/4BqP1/P4P1R/6K1 b - - 0 1", solution: ["Qh1+", "Rxh1", "Rxh1#"], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 296, date: "2002", white: "Meilis Annaberdiev", black: "Tjapko Struik", result: "1-0", fen: "rn2kb1r/p5pp/4p3/1pp2p2/2P1b2B/4QN2/qP2PPPP/3RKB1R w Kkq - 1 1", solution: ["Rd8+", "Kf7", "Ne5+", "Kg8", "Rxf8+", "Kxf8", "Qxc5+", "Kg8", "Qc8#",], description: "White  moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 297, date: "2012", white: "Meilis Annaberdiev", black: "Ryan Rhys Griffiths", result: "1-0", fen: "k1q3r1/pR3p2/Pb2b3/1B2QN1p/3pP3/5PP1/2P3KP/8 w - - 1 1", solution: ["Rb8+", "Qxb8", "Bc6+", "Qb7", "Bxb7#",], alternatives: {
            "Qb7": ["axb7#",],
        }, description: "White  moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 298, date: "2013", white: "Meilis Annaberdiev", black: "Bahadir Ozen", result: "1-0", fen: "8/3R2p1/p4p1p/r2p4/3n1Pk1/b2BP1P1/P5KP/8 w - - 1 1", solution: ["Bg6", "f5", "h3#",], description: "White  moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 299, date: "2018", white: "Bahadir Ozen", black: "Meilis Annaberdiev", result: "0-1", fen: "4r2k/ppp4p/5n1q/2PPp3/4Pp1n/1P4rP/PQ3N1K/4R1RB b - - 0 1", solution: ["Ng4+", "Nxg4", "Nf3+", "Bxf3", "Qxh3#",], description: "Black  moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 300, date: "2012", white: "Boris Savchenko", black: "Vadim Zvjaginsev", result: "0-1", fen: "8/2k5/1r6/4N3/3p2RP/2p5/1p6/1K6 b - - 0 1", solution: ["c2+", "Kxc2", "b1=Q+", "Kd2", "Rb2#",], description: "Black  moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 301, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "4bkr1/5pp1/1q1p4/4N3/8/4R3/Q7/6K1 w - - 0 1", solution: ["Qxf7+", "Bxf7", "Nd7#",], description: "White  moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 302, date: "2008", white: "Mikhail Al Antipov", black: "Alexandra Shumilina", result: "1-0", fen: "r3b3/6kp/pbqppN2/1p6/4P3/1B3Q2/PPP3PP/5R1K w - - 1 1", solution: ["Ng4", "h5", "Qf8+", "Kh7", "Qh6+", "Kg8", "Rf8#",], description: "White  moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 303, date: "2026", white: "Unknown", black: "Dhananjay Patil", result: "0-1", fen: "2k4r/Bp3ppp/2p1pn2/4n3/1b2P3/4KB1P/PPPr1PP1/R2N3R b - - 4 14", solution: ["Nc4+", "Kf4", "Bd6+", "e5", "Bxe5+", "Kg5", "h6+", "Kh4", "g5#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 304, date: "2018", white: "Nils Grandelius", black: "Mikhail Al Antipov", result: "0-1", fen: "6k1/1p4p1/p1b1p1r1/4P2p/P6q/1P2p1P1/4QP1P/2B1R1K1 b - - 0 1", solution: ["Rxg3+", "fxg3", "Qe4", "Qf3", "Qxf3", "Re2", "Qh1#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 305, date: "2018", white: "Mikhail Al Antipov", black: "Tapani Sammalvuo", result: "1-0", fen: "2R3Bk/6p1/1p5p/4pbPP/1P1b4/5pK1/5P2/8 w - - 1 1", solution: ["Be6+", "Kh7", "g6+", "Bxg6", "Bg8+", "Kh8", "Bf7+", "Kh7", "hxg6#",], alternatives: {
            "Kh7": ["Bxg6#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 306, date: "2018", white: "Mikhail Al Antipov", black: "Alexey Dreev", result: "1-0", fen: "3k4/ppr1bp1r/4p1p1/3pP2p/QP1q1N1P/P4RP1/6PK/5R2 w - - 1 1", solution: ["Nxe6+", "fxe6", "Rf8+", "Bxf8", "Rxf8+", "Ke7", "Qe8#",], description: "White  moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 307, date: "2018", white: "Mikhail Al Antipov", black: "Revanth Krishna", result: "1-0", fen: "6qk/1p1Q3p/6pP/p3P3/3p4/8/6PK/8 w - - 1 1", solution: ["Qe7", "d3", "Qf6+", "Qg7", "Qxg7#"], description: "White  moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 308, date: "2026", white: "Dhananjay Patil", black: "Unknown", result: "1-0", fen: "3b2rk/1ppR2p1/2q1B3/5PPp/3QN2P/pP3P2/P7/1K5R w - - 1 1", solution: ["Qxg7+", "Rxg7", "Rxd8+", "Qe8", "Rxe8+", "Rg8", "Rxg8+", "Kh7", "Nf6#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 309, date: "2006", white: "David A Guijarro", black: "Pablo S Tornero", result: "1-0", fen: "8/5pkp/p5p1/2N1b1P1/8/5bP1/r4P2/2RR2K1 w - - 1 1", solution: ["Ne6+", "fxe6", "Rd7+", "Kh8", "Rc8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 310, date: "2008", white: "David A Guijarro", black: "Victor V Arino", result: "1-0", fen: "r6k/1bp1Rr1p/1p3qpQ/p2P1p2/8/P7/BP3PPP/4R1K1 w - - 1 1", solution: ["Re8+", "Rf8", "R1e7", "Qxe7", "Rxe7", "Rf7", "Rxf7", "Rg8", "Qxh7"], alternatives: {
            "Rg8": ["Rxh7#",],
        }, description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 311, date: "2026", white: "Dhananjay Patil", black: "Unknown", result: "1-0", fen: "3r1r1k/1p3pRp/p4N1P/5N2/3p2n1/P2P4/1P4PK/8 w - - 2 34", solution: ["Rxg4", "Rg8", "Rg7", "Rxg7", "hxg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 312, date: "2014", white: "Chitumbo Mwali", black: "David A Guijarro", result: "0-1", fen: "1r4k1/b5p1/p1N5/2P5/3B4/P3qbPQ/7K/2R5 b - - 0 1", solution: ["Rb2+", "Rc2", "Rxc2+", "Qg2", "Rxg2+", "Kh3", "Qh6#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 313, date: "2016", white: "David A Guijarro", black: "Quang Liem Le", result: "1-0", fen: "7R/p1R2p2/1p1rpkp1/7Q/p2P1q1P/5N2/5PP1/6K1 w - - 1 1", solution: ["Rxf7+", "Kxf7", "Qh7+", "Kf6", "Rf8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 314, date: "2018", white: "David A Guijarro", black: "Yago De Moura", result: "1-0", fen: "1r1r2k1/ppn1qn1p/4bR2/1PP2p2/P2Q4/2B3P1/4PPBP/R5K1 w - - 1 1", solution: ["Rg6+", "Kf8", "Rg8+", "Kxg8", "Qg7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 315, date: "1995", white: "Alexander Graf", black: "Rogelio Antonio", result: "0-1", fen: "3r2k1/pP1b1ppp/2p4q/QP1p4/3P1b1n/B2Br3/6PP/R1RN2K1 b - - 0 1", solution: ["Nf3+", "Kf1", "Nxh2+", "Kf2", "Ng4+", "Kg1", "Qh2+", "Kf1", "Qh1#",], description: "Black moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 316, date: "2001", white: "Rogelio Antonio", black: "Reggie Olay", result: "1-0", fen: "2b3k1/r3q2p/4p1pB/p4r2/4N3/P1Q5/1P4PP/2R2R1K w - - 0 1", solution: ["Qh8+", "Kxh8", "Rxc8+", "Rf8", "Rfxf8+", "Qxf8", "Rxf8#"], alternatives: {
            "Rf8": ["Rcxf8+",],
        }, description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 317, date: "2003", white: "Lawrence Trent", black: "Rogelio Antonio", result: "1-0", fen: "8/pp3pk1/2b2b2/8/2Q2P1r/2P1q2B/PP4PK/5R2 b - - 0 1", solution: ["Rxh3+", "gxh3", "Qd2+", "Qe2", "Qxe2+", "Rf2", "Qxf2#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 318, date: "2007", white: "Meri Arabidze", black: "Busra Arig", result: "1-0", fen: "2r1r1k1/1p1n1p1p/1q3Bp1/p2BPb1Q/5P2/P5RP/3R3K/8 w - - 1 1", solution: ["Bxf7+", "Kf8", "Qh6+", "Kxf7", "Qg7+", "Ke6", "Qxd7#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 319, date: "2012", white: "Meri Arabidze", black: "Marina Romanko", result: "1-0", fen: "1Q6/5pk1/6p1/3p3p/2qP1P1B/2p1P3/3n2K1/3B4 w - - 1 1", solution: ["Bf6+", "Kxf6", "Qe5#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 320, date: "2008", white: "Bayarmaa Bayarjargal", black: "Meri Arabidze", result: "0-1", fen: "4r1k1/2p3pp/1p6/1PPp4/Q2Pb1nq/P3P2N/6P1/B4BK1 b - - 0 1", solution: ["Qg3", "c6", "Qh2#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 321, date: "1986", white: "Ketevan Arakhamia", black: "Natalia Eremina", result: "1-0", fen: "4b2q/1pk5/rNn5/p3p3/5B2/P2Q3P/1P4P1/3R2K1 w - - 1 1", solution: ["Qd6+", "Kxb6", "Be3+", "Kb5", "b3", "Nd4", "a4#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 322, date: "1990", white: "Ketevan Arakhamia", black: "Agnieszka Brustman", result: "1-0", fen: "1k6/8/PPK2p2/P4p1p/7P/8/5p2/8 w - - 0 1", solution: ["a7+", "Ka8", "Kc7", "f1=Q", "b7+", "Kxa7", "b8=Q+", "Ka6", "Qb6#",], description: "White moves and wins in 5.", category: "Mate in 5"
    },
    {
        id: 323, date: "1991", white: "Ketevan Arakhamia", black: "Miroljub Lazic", result: "1-0", fen: "r1b1r1k1/p1q3p1/1pp1pn1p/8/3PQ3/B1PB4/P5PP/R4RK1 w - - 0 1", solution: ["Rxf6", "g6", "Qxg6+", "Qg7", "Qxe8+", "Qf8", "Qxf8#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 324, date: "1994", white: "Ketevan Arakhamia", black: "Rodriguez Lopez", result: "1-0", fen: "rn1q4/p3pp2/1p3k2/2pb1p2/5Q2/1PNP2P1/P3PP2/R3K3 w - - 0 1", solution: ["Qh6+", "Ke5", "d4+", "cxd4", "f4#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 325, date: "1999", white: "Ketevan Arakhamia", black: "Ian Robertson", result: "1-0", fen: "r3r1kb/5p1p/p2Qb1pB/2p2NPP/1p2P3/3n1P2/PqPKB3/3R3R w - - 1 1", solution: ["Qf8+", "Rxf8", "Ne7#",], description: "White moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 326, date: "2013", white: "Chithambaram Aravindh", black: "A Abhishek", result: "1-0", fen: "6Q1/q2rkn1p/pp1p3B/2p5/P3P3/8/1PP3PP/3R3K w - - 1 1", solution: ["Bf8+", "Kf6", "Qg7+", "Ke6", "Qg4+", "Kf6", "Qf5#",], description: "White moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 327, date: "2013", white: "Chithambaram Aravindh", black: "Sinisa Drazic", result: "1-0", fen: "r5k1/1p3N1p/2p2qpQ/p1P1p3/2B3P1/7P/PP3P2/6K1 w - - 1 1", solution: ["Ng5+", "Qe6", "Bxe6+", "Kh8", "Qxh7#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 328, date: "2013", white: "Kirill Kuderinov", black: "Chithambaram Aravindh", result: "0-1", fen: "6k1/6p1/p7/R6P/3N1p1K/1P2n3/P5r1/8 b - - 0 1", solution: ["Rg3", "h6", "Ng2+", "Kh5", "g6#",], description: "Black moves and wins in 2.", category: "Mate in 2"
    },
    {
        id: 329, date: "2014", white: "David Henderson", black: "Chithambaram Aravindh", result: "0-1", fen: "4r3/5pk1/1pQ1pbp1/1R6/3P1P1q/8/6P1/3R2K1 b - - 0 1", solution: ["Bxd4+", "Rxd4", "Qe1+", "Kh2", "Rh8+", "Rh5", "Rxh5#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },
    {
        id: 330, date: "2015", white: "Chithambaram Aravindh", black: "M Turqueza", result: "1-0", fen: "5k2/2b2ppp/1rN5/2p1pP2/8/7n/R5PP/3R3K w - - 1 1", solution: ["Ra8+", "Rb8", "Rxb8+", "Bxb8", "Rd8#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 331, date: "?", white: "Unknown", black: "Unknown", result: "1-0", fen: "k4r1r/Pn6/1Q6/1PpRp3/2N1P2p/2P1bqPp/5n1P/5RK1 w - - 0 1", solution: ["Qxb7+", "Kxb7", "Rd7+", "Kc8", "Nb6#",], description: "White moves and wins in 3.", category: "Mate in 3"
    },
    {
        id: 332, date: "?", white: "Unknown", black: "Unknown", result: "0-1", fen: "3r1k1r/1pN1bppp/2p3q1/8/Q3R3/7b/PPP2PPP/R1B2BK1 b - - 0 1", solution: ["Qxg2+", "Bxg2", "Rd1+", "Re1", "Rxe1+", "Bf1", "Rxf1#",], description: "Black moves and wins in 4.", category: "Mate in 4"
    },








];


