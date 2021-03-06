module.exports = {
    note : function(note_choosed){
        note_table = {
            'c0':   16.35,
            'c#0':  17.32,
            'd0':   18.35,
            'd#0':  19.45,
            'e0':   20.60,
            'f0':   21.83,
            'f#0':  23.12,
            'g0':   24.50,
            'g#0':  25.96,
            'a0':   27.50,
            'a#0':  29.14,
            'b0':   30.87,
    
            
            'c1':   32.70,
            'c#1':  34.65,
            'd1':   36.71,
            'd#1':  38.89,
            'e1':   41.20,
            'f1':   43.65,
            'f#1':  46.25,
            'g1':   49.00,
            'g#1':  51.91,
            'a1':   55.00,
            'a#1':  58.27,
            'b1':   61.7,
    
    
            'c2':   65.41,
            'c#2':  69.30,
            'd2':   73.42,
            'd#2':  77.78,
            'e2':   82.41,
            'f2':   87.31,
            'f#2':  92.50,
            'g2':   98.00,
            'g#2':  103.8,
            'a2':   110.0,
            'a#2':  116.5,
            'b2':   123.5,
    
    
            'c3':   130.8,
            'c#3':  138.6,
            'd3':   146.8,
            'd#3':  155.6,
            'e3':   164.8,
            'f3':   174.6,
            'f#3':  185.0,
            'g3':   196.0,
            'g#3':  207.7,
            'a3':   220.0,
            'a#3':  233.1,
            'b3':   246.9,
    
    
            'c4':   261.6,
            'c#4':  277.2,
            'd4':   293.7,
            'd#4':  311.1,
            'e4':   329.6,
            'f4':   349.2,
            'f#4':  370.0,
            'g4':   392.0,
            'g#4':  415.3,
            'a4':   440.0,
            'a#4':  466.2,
            'b4':   493.9,
    
    
            'c5':   523.3,
            'c#5':  554.4,
            'd5':   587.3,
            'd#5':  622.3,
            'e5':   659.3,
            'f5':   698.5,
            'f#5':  740.0,
            'g5':   784.0,
            'g#5':  830.6,
            'a5':   880.0,
            'a#5':  932.3,
            'b5':   987.8,
    
    
            'c6':   1047,
            'c#6':  1109,
            'd6':   1175,
            'd#6':  1245,
            'e6':   1319,
            'f6':   1397,
            'f#6':  1480,
            'g6':   1568,
            'g#6':  1661,
            'a6':   1760,
            'a#6':  1865,
            'b6':   1976,
    
    
            'c7':   2093,
            'c#7':  2217,
            'd7':   2349,
            'd#7':  2489,
            'e7':   2637,
            'f7':   2794,
            'f#7':  2960,
            'g7':   3136,
            'g#7':  3322,
            'a7':   3520,
            'a#7':  3729,
            'b7':   3951,
        }
        console.log(note_choosed);
        var note = note_table[note_choosed];
        console.log(note);
        return note == undefined ? false : note;        
    }
}
