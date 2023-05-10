export const floors = []
for (let i = 3; i <= 27; i++) {
    floors.push(i)
}

export const confs = []
for (let i = 1; i <= 10; i++) {
    confs.push(i)
}

export const times = []

for (let i = 10; i < 20; i++) {
    times.push(`${i}:00 - ${i}:30`)
    times.push(`${i}:30 - ${i + 1}:00`)
}
