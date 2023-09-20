class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort(function(a, b){return a-b});
        return args[0];
    }
}
//============================================

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a,b)=>a-b)[0];
    }
}

//=========================================

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

//=================================================

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];
        for(let i = 0; i< args.length; i++) {
            min = min < args[i] ? min : args[i]
        }
        return min;
    }
}