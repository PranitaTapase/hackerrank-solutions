function matchingStrings(strings, queries) {
    // Write your code here
    const count = new Array(queries.length);
    count.fill(0);
    for(const [index, element] of queries.entries()){
        for(const [i, e] of strings.entries()){ 
            if(element.includes(e)){
                count[index] = count[index]+1;
            }

        };
    }
    return count;
}
