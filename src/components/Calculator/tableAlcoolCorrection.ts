export function densityCorrection(temperature: string) {
  switch (temperature) {
    case '1':
    case '2':
    case '6':
    case '7':
      return 1.7
      break
    case '3':
    case '4':
    case '5':
      return 1.8
      break
    case '8':
    case '9':
      return 1.6
      break
    case '10':
      return 1.5
      break
    case '11':
      return 1.4
      break
    case '12':
      return 1.3
      break
    case '13':
      return 1.2
      break
    case '14':
      return 1.1
      break
    case '16':
      return 0.8
      break
    case '19':
    case '21':
      return 0.2
      break
    case '18':
    case '20':
    case '22':
      return 0.4
      break
    case '17':
    case '23':
      return 0.6
      break
    case '15':
    case '24':
      return 0.9
      break
    case '25':
      return 1.1
      break
    case '26':
      return 1.4
      break
    case '27':
      return 1.6
      break
    case '28':
      return 1.9
      break
    case '29':
      return 2.2
      break
    case '30':
      return 2.5
      break
    case '31':
      return 2.8
      break
    case '32':
      return 3.1
      break
    case '33':
      return 3.4
      break
    case '34':
      return 3.7
      break
    case '35':
      return 4.1
      break
    case '36':
      return 4.4
      break
    case '37':
      return 4.8
      break
    case '38':
      return 5.1
      break
    case '39':
      return 5.5
      break
    case '40':
      return 5.9
      break
    case '41':
      return 6.2
      break
    case '42':
      return 6.6
      break
    case '43':
      return 7.0
      break
    case '44':
      return 7.4
      break
    case '45':
      return 7.8
      break
    case '46':
      return 8.3
      break
    case '47':
      return 8.7
      break
    case '48':
      return 9.1
      break
    case '49':
      return 9.5
      break
    case '50':
      return 10
      break
    case '51':
      return 10.4
      break
    case '52':
      return 10.9
      break
    case '53':
      return 11.4
      break
    case '54':
      return 11.8
      break
    case '55':
      return 12.3
      break
    case '56':
      return 12.8
      break
    case '57':
      return 13.3
      break
    case '58':
      return 13.8
      break
    case '59':
      return 14.3
      break
    case '60':
      return 14.8
      break
    case '61':
      return 15.3
      break
    case '62':
      return 15.8
      break
    case '63':
      return 16.4
      break
    case '64':
      return 16.9
      break
    case '65':
      return 17.5
      break
    case '66':
      return 18
      break
    case '67':
      return 18.6
      break
    case '68':
      return 19.1
      break
    case '69':
      return 19.7
      break
    case '70':
      return 20.3
      break
    case '71':
      return 20.8
      break
    case '72':
      return 21.4
      break
    case '73':
      return 22
      break
    case '74':
      return 22.6
      break
    case '75':
      return 23.2
      break
    case '76':
      return 23.8
      break
    case '77':
      return 24.4
      break
    case '78':
      return 25
      break
    case '79':
      return 25.7
      break
    case '80':
      return 26.3
      break
    case '81':
      return 26.9
      break
    case '82':
      return 27.6
      break
    case '83':
      return 28.2
      break
    case '84':
      return 28.9
      break
    case '85':
      return 29.5
      break
    case '86':
      return 30.2
      break
    case '87':
      return 30.9
      break
      default:
        return 0
  }
}
