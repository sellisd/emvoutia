re_start = /(?<=[\s\t\w,.:;"']|^)[μΜ][πΠ]/g
re_rest = /[μΜ][πΠ]/g

function replacer_rest(match){
    switch(match){
      case 'μπ':
        return 'μβ';
      case 'ΜΠ':
        return 'ΜΒ';
      case 'Μπ':
        return 'Μβ';
      default:
        return match;
    }
}

function replacer_start(match){
    switch(match){
      case 'μπ':
        return 'εμβ';
      case 'ΜΠ':
        return 'ΕΜΒ';
      case 'Μπ':
        return 'Εμβ';
      default:
        return match;
    }
}


document.body.innerHTML = document.body.innerHTML.replaceAll(re_start,replacer_start)
document.body.innerHTML = document.body.innerHTML.replaceAll(re_rest,replacer_rest)
