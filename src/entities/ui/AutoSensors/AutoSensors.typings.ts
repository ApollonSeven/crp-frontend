import { ITurnSignals } from './components/TurnSignals/TurnSignals'
import { IAutoModes } from 'entities/ui/AutoSensors/components/AutoModes/AutoModes'
import { ITopSensors } from 'entities/ui/AutoSensors/components/TopSensors/TopSensors'
import { IBottomSensors } from 'entities/ui/AutoSensors/components/BottomSensors/BottomSensors'

interface Sensors extends ITopSensors, Omit<IBottomSensors, 'fuelColor'> {}

export interface Props {
    speed: number
    maxSpeed: number
    fuel: number
    maxFuel: number
    rotations: number
    maxRotations: number
    transmission: string
    turnSignals: ITurnSignals
    modes: IAutoModes
    sensors: Sensors
}
