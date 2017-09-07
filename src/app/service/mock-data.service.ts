import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
    createDb() {
        const activeKeepers = [
            {uuid: '002fafbe-0a96-4c9a-a876-d35a783325c6', directions: ["dir1", "dir2"]},
            {uuid: '01f1d246-cc99-4658-b256-7cc6631fdde8', directions: ["dir1", "dir2"]},
            {uuid: '02629c8b-f268-4296-ae6f-ee01a4b0dede', directions: ["dir1", "dir2"]},
            {uuid: '02de9640-5900-4805-b384-7cc33ab74081', directions: ["dir1", "dir2"]}
        ];
        const teams = [
          { id: '1',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '2',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '3',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '4',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '5',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '6',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '7',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '8',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '9',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
          { id: '10',
            members: [
              '002fafbe-0a96-4c9a-a876-d35a783325c6',
              '01f1d246-cc99-4658-b256-7cc6631fdde8',
              '02629c8b-f268-4296-ae6f-ee01a4b0dede',
              '02de9640-5900-4805-b384-7cc33ab74081'],
            activateDate: 1502928000000,
            deactivateDate: 1505520000000},
        ];
        return {activeKeepers, teams};
    }
}
