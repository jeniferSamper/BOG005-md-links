
const statsLinks = (res) => {
    const brokens = res.filter(link => link.ok === 'Fail').length  
    const uniqueLinks = []
    res.forEach(link => uniqueLinks.push(link.href));
    return {
        total: res.length,
        unique: new Set(uniqueLinks).size,
        broken: brokens
    }    
  }


module.exports = statsLinks;