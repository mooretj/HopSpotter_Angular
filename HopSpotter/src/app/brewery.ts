import { Time } from "@angular/common"

export interface Brewery {
    breweryId: number,
    breweryName: string,
    breweryMainImg: string,
    website: string,
    history: string,
    breweryContact: {
        breweryId: number,
        email: string,
        phone: number,
        breweryAddress: string
    },
    breweryHours: {
        brewery_id: number,
                    sundayOpen: undefined,
                    sundayClose: undefined,
                    mondayOpen: undefined,
                    mondayClose: undefined,
                    tuesdayOpen: undefined,
                    tuesdayClose: undefined,
                    wednesdayOpen: undefined,
                    wednesdayClose: undefined,
                    thursdayOpen: undefined,
                    thursdayClose: undefined,
                    fridayOpen: undefined,
                    fridayClose: undefined,
                    saturdayOpen: undefined,
                    saturdayClose: undefined,
    }
}
