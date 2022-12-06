const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const months = [...yearSeasons.spring, ...yearSeasons.summer, ...yearSeasons.autumn, ...yearSeasons.winter];

console.log(months);
